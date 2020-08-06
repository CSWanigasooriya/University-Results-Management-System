import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
    selector: 'app-upload-task',
    templateUrl: './upload-task.component.html',
    styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

    @Input() file: File;

    task: AngularFireUploadTask;

    percentage: Observable<number>;
    snapshot: Observable<any>;
    downloadURL: string;

    constructor(private storage: AngularFireStorage, private db: FirebaseService) { }

    ngOnInit() {
        this.startUpload();
    }

    startUpload() {

        // The storage path
        const path = `images/${Date.now()}_${this.file.name}`;

        // Reference to storage bucket
        const ref = this.storage.ref(path);

        // The main task
        this.task = this.storage.upload(path, this.file);

        // Progress monitoring
        this.percentage = this.task.percentageChanges();

        this.snapshot = this.task.snapshotChanges().pipe(
            tap(console.log),
            // The file's download URL
            finalize(async () => {
                this.downloadURL = await ref.getDownloadURL().toPromise();
                this.db.updateUserImage(this.downloadURL, path);
            }),
        );
    }

    isActive(snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }

}
