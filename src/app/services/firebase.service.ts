import { User } from '../interfaces/User';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private zone: NgZone,
    private dialog: MatDialog) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    await this.zone.run(() => {
      this.afAuth.signInWithPopup(provider).then(result => {
        this.updateUserData(result.user);
      }).catch(error => {
        this.openDialog('Invalid Email or Password', error);
      });
    });
  }

  async signInWithEmail(email: string, password: string) {
    this.openDialog('Signing In');
    await this.zone.run(() => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(user => {
        this.updateUserData(user.user);
      }).catch(error => {
        this.openDialog('Invalid Email or Password', error);
      });
    });
  }

  async resetPassword(email) {
    this.afAuth.sendPasswordResetEmail(email);
  }

  async signOut() {
    await this.zone.run(() => {
      this.afAuth.signOut().then(() => {
        this.router.navigate(['/login']);
      });
    });
  }

  getMessage(): Observable<any> {
    return this.afs.collection(`notice`).valueChanges();
  }

  sendMessage(message) {
    const data = {
      message,
      date: String(new Date())
    };
    this.user$.subscribe(user => {
      return this.afs.collection('notice').doc(user.uid).set(data);
    });
  }
  updateUserData(user) {
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true
      }
    };
    return this.afs.collection('users').doc(user.uid).set(data, { merge: true }).then(() => {
      this.user$.subscribe(res => {
        this.zone.run(() => {
          if (!this.isEditor(res) && !this.isAdmin(res)) {
            this.router.navigate(['/home/subscriber/dashboard']);
          }
          if (this.isEditor(res)) {
            this.router.navigate(['/home/editor/dashboard']);
          }
          if (this.isAdmin(res)) {
            this.router.navigate(['/home/admin/dashboard']);
          }
        });
      });
    });
  }

  public updateUserImage(downloadURL, path?) {
    this.user$.subscribe(user => {
      this.afs.collection('files').doc(user.uid).set({ downloadURL, path });
      this.afs.collection('users').doc(user.uid).set({ photoURL: downloadURL }, { merge: true });
    });
  }

  openDialog(title: string, content?: string) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModalComponent, {
      position: {
        top: '10vh'
      },
      width: '600px',
      data: {
        title,
        content,
        cancelText: 'Cancel',
        confirmText: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  canRead(user: User): boolean {
    const allowed = ['admin', 'setter', 'moderator', 'subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'setter', 'moderator'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  isAdmin(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  isEditor(user: User): boolean {
    const allowed = ['setter', 'moderator'];
    return this.checkAuthorization(user, allowed);
  }

  isSubscriber(user: User): boolean {
    const allowed = ['subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  setModerator(user){
    return this.afs.collection('users').doc(user.uid).set(user, { merge: true });
  }

  setSetter(user){
    return this.afs.collection('users').doc(user.uid).set(user, { merge: true });
  }

  // determines if user has matching role
  private checkAuthorization(user, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }
}
