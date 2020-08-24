import { Student } from './../interfaces/student';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SqlService {
  PHP_API_SERVER = 'http://127.0.0.1:8080';

  // php -S 127.0.0.1:8080 -t ./src/backend


  constructor(private httpClient: HttpClient) { }

  readUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/user/read.php`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/user/create.php`, user);
  }

  updateUser(user: User) {
    return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/user/update.php`, user);
  }

  deleteUser(id: number) {
    return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/api/user/delete.php/?id=${id}`);
  }

  readStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.PHP_API_SERVER}/api/user/read.php`);
  }
  createStudent(user: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.PHP_API_SERVER}/api/student/create.php`, user);
  }
  updateStudent(user: Student) {
    return this.httpClient.put<Student>(`${this.PHP_API_SERVER}/api/student/update.php`, user);
  }

  deleteStudent(id: number) {
    return this.httpClient.delete<Student>(`${this.PHP_API_SERVER}/api/student/delete.php/?id=${id}`);
  }
}
