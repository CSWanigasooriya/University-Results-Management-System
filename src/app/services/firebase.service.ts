import { User } from '../interfaces/User';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { auth } from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user$: AngularFirestoreCollection<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private zone: NgZone,
    private dialog: MatDialog) {

    this.afAuth.user.subscribe(data => {
      this.user$ = this.afs.collection(`users`);
    });
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
    await this.afAuth.signOut().then(user => {
      this.router.navigate(['/login']);
      this.updateUserData(user);
    });
  }

  private updateUserData(user) {

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return this.afs.collection('users').doc(user.uid).set(data, { merge: true });
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
