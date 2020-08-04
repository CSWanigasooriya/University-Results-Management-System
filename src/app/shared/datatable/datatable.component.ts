import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as faker from 'faker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})

export class DatatableComponent implements AfterViewInit {

  displayedColumns = ['name', 'age', 'email', 'phrase', 'edit'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private afs: AngularFirestore, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  ngAfterViewInit() {
    this.afs.collection<any>(`marks`).valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // Database seeding
  addOne() {
    const user = {
      name: faker.name.findName(),
      age: String(faker.random.number({ min: 18, max: 99 })),
      email: faker.internet.email(),
      phrase: faker.hacker.phrase(),
      uid: faker.random.alphaNumeric(16)
    };
    this.afs.collection('marks').doc(user.uid).set(user);
    this.openSnackBar('User has been added', 'Close');
  }

  deleteOne(elm) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModalComponent, {
      position: {
        top: '10vh'
      },
      width: '600px',
      data: {
        title: 'Are you sure you want to delete?',
        content: 'This process can not be undone.',
        cancelText: 'Cancel',
        confirmText: 'Yes'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data
          .filter(i => i !== elm)
          .map((i, idx) => (i.position = (idx + 1), i));
        const uid = this.trackByUid(elm);
        this.afs.collection('marks').doc(uid).delete();
        this.openSnackBar('User has been removed', 'Close');
      }
    });
  }

  editOne(elm) {
    // const uid = this.trackByUid(elm);
    // this.afs.collection('users').doc(uid).set({
    //   name: 'Chamath',
    //   age: '20',
    //   email: 'chamathwanigasooriya@gmail.com',
    //   phrase: 'Never Settle'
    // }, { merge: true });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  trackByUid(item) {
    return item.uid;
  }
  async deleteCollection() {
      const qry: firebase.firestore.QuerySnapshot = await this.afs.collection('marks').ref.get();
      // You can use the QuerySnapshot above like in the example i linked
      qry.forEach(doc => {
        doc.ref.delete();
      });
  }
}

