import { User } from '../interfaces/User';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private zone: NgZone,
    private dialog: MatDialog) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider).then(result => {
      this.router.navigate(['/admin']);
      return this.updateUserData(result.user);
    }).catch(error => {
      this.openDialog('Invalid Email or Password', error);
    });
  }

  async signInWithEmail(email: string, password: string) {
    this.openDialog('Signing In');
    this.zone.run(() => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(user => {
        this.router.navigate(['admin']);
        this.updateUserData(user.user);
      }).catch(error => {
        this.openDialog('Invalid Email or Password', error);
      });
    });
  }

  async signOut() {
    await this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
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
        content
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.afAuth.signOut();
    });
  }
}
