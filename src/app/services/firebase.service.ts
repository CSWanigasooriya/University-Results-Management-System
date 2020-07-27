import { User } from './../interfaces/user';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ModalService } from 'src/app/services/modal.service';
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
    private modal: ModalService,
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

  openDialog(title, content?) {
    this.dialog.closeAll();
    this.modal.changeTitle(title);
    this.modal.changeContent(content);
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '750px',
      position: {
        top: '10vh'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.signOut();
      }
    });
  }

}
