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
    await this.afAuth.signInWithPopup(provider).then(result => {
      this.router.navigate(['/admin']);
      this.updateUserData(result.user, '');
    }).catch(error => {
      this.openDialog('Invalid Email or Password', error);
    });
  }

  async signInWithEmail(email: string, password: string) {
    this.openDialog('Signing In');
    this.zone.run(() => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(user => {
        this.router.navigate(['admin']);
        this.updateUserData(user.user, password);
      }).catch(error => {
        this.openDialog('Invalid Email or Password', error);
      });
    });
  }

  async resetPassword(email){
    this.afAuth.sendPasswordResetEmail(email);
  }

  async signOut() {
    await this.afAuth.signOut().then(user => {
      this.router.navigate(['/login']);
      this.updateUserData(user);
    });
  }

  public updateUserData(user, password?) {

    const data = {
      uid: user.uid,
      email: user.email,
      password,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return this.afs.collection('users').doc(user.uid).set(data, { merge: true });
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
}
