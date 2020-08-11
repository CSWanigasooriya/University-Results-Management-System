import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private afs: AngularFirestore) {
    }

    getUsers() {
        return this.afs.collection('student').snapshotChanges();
    }

    getMarks() {
        return this.afs.collection('marks').snapshotChanges();
    }
}
