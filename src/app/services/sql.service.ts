import { Module } from './../interfaces/module';
import { Result } from './../interfaces/result';
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

  // User

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


  // Student

  readStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.PHP_API_SERVER}/api/student/read.php`);
  }
  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.PHP_API_SERVER}/api/student/create.php`, student);
  }
  updateStudent(student: Student) {
    return this.httpClient.put<Student>(`${this.PHP_API_SERVER}/api/student/update.php`, student);
  }

  deleteStudent(id: number) {
    return this.httpClient.delete<Student>(`${this.PHP_API_SERVER}/api/student/delete.php/?id=${id}`);
  }


  // Result


  readResult(): Observable<Result[]> {
    return this.httpClient.get<Result[]>(`${this.PHP_API_SERVER}/api/result/read.php`);
  }
  createResult(result: Result): Observable<Result> {
    return this.httpClient.post<Result>(`${this.PHP_API_SERVER}/api/result/create.php`, result);
  }
  updateResult(result: Result) {
    return this.httpClient.put<Result>(`${this.PHP_API_SERVER}/api/result/update.php`, result);
  }

  deleteResult(id: number) {
    return this.httpClient.delete<Result>(`${this.PHP_API_SERVER}/api/result/delete.php/?id=${id}`);
  }


  // Module


  readModule(): Observable<Module[]> {
    return this.httpClient.get<Module[]>(`${this.PHP_API_SERVER}/api/module/read.php`);
  }
  createModule(module: Module): Observable<Module> {
    return this.httpClient.post<Module>(`${this.PHP_API_SERVER}/api/module/create.php`, module);
  }
  updateModule(module: Module) {
    return this.httpClient.put<Module>(`${this.PHP_API_SERVER}/api/module/update.php`, module);
  }

  deleteModule(id: number) {
    return this.httpClient.delete<Module>(`${this.PHP_API_SERVER}/api/module/delete.php/?id=${id}`);
  }



  // Deparment

  readDepartment(): Observable<Module[]> {
    return this.httpClient.get<Module[]>(`${this.PHP_API_SERVER}/api/module/read.php`);
  }
  createDepartment(module: Module): Observable<Module> {
    return this.httpClient.post<Module>(`${this.PHP_API_SERVER}/api/module/create.php`, module);
  }
  updateDepartment(module: Module) {
    return this.httpClient.put<Module>(`${this.PHP_API_SERVER}/api/module/update.php`, module);
  }

  deleteDepartment(id: number) {
    return this.httpClient.delete<Module>(`${this.PHP_API_SERVER}/api/module/delete.php/?id=${id}`);
  }
}
