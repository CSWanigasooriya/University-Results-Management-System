import { environment } from './../../environments/environment.prod';
import { Department } from './../interfaces/department';
import { Lecturer } from './../interfaces/lecturer';
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

  email: string;
  name: string;
  message: string;
  endpoint: string;

  // php -S 127.0.0.1:8080 -t ./src/backend


  constructor(private httpClient: HttpClient) {
    this.email = 'chamathwanigasooriya@gmail.com';
    this.name = 'Hayden Pierce';
    this.message = 'Hello, this is Hayden.';
    this.endpoint = `${environment.PHP_API_SERVER}/api/mail.php`;
  }

  // sendEmail(){
  //   const postVars = {
  //     email : this.email,
  //     name : this.name,
  //     message : this.message
  //   };

  //   // You may also want to check the response. But again, let's keep it simple.
  //   this.httpClient.post(this.endpoint, postVars)
  //       .subscribe(
  //           response => console.log(response),
  //           response => console.log(response)
  //       );
  // }

  // User

  readUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.PHP_API_SERVER}/api/user/read.php`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.PHP_API_SERVER}/api/user/create.php`, user);
  }

  updateUser(user: User) {
    return this.httpClient.put<User>(`${environment.PHP_API_SERVER}/api/user/update.php`, user);
  }

  deleteUser(id: number) {
    return this.httpClient.delete<User>(`${environment.PHP_API_SERVER}/api/user/delete.php/?id=${id}`);
  }


  // Student

  readStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${environment.PHP_API_SERVER}/api/student/read.php`);
  }
  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${environment.PHP_API_SERVER}/api/student/create.php`, student);
  }
  updateStudent(student: Student) {
    return this.httpClient.put<Student>(`${environment.PHP_API_SERVER}/api/student/update.php`, student);
  }

  deleteStudent(id: number) {
    return this.httpClient.delete<Student>(`${environment.PHP_API_SERVER}/api/student/delete.php/?id=${id}`);
  }


  // Result


  readResult(): Observable<Result[]> {
    return this.httpClient.get<Result[]>(`${environment.PHP_API_SERVER}/api/result/read.php`);
  }
  createResult(result: Result): Observable<Result> {
    return this.httpClient.post<Result>(`${environment.PHP_API_SERVER}/api/result/create.php`, result);
  }
  updateResult(result: Result) {
    return this.httpClient.put<Result>(`${environment.PHP_API_SERVER}/api/result/update.php`, result);
  }

  deleteResult(id: number) {
    return this.httpClient.delete<Result>(`${environment.PHP_API_SERVER}/api/result/delete.php/?id=${id}`);
  }


  // Module


  readModule(): Observable<Module[]> {
    return this.httpClient.get<Module[]>(`${environment.PHP_API_SERVER}/api/module/read.php`);
  }

  createModule(module: Module): Observable<Module> {
    return this.httpClient.post<Module>(`${environment.PHP_API_SERVER}/api/module/create.php`, module);
  }

  updateModule(module: Module) {
    return this.httpClient.put<Module>(`${environment.PHP_API_SERVER}/api/module/update.php`, module);
  }

  deleteModule(id: number) {
    return this.httpClient.delete<Module>(`${environment.PHP_API_SERVER}/api/module/delete.php/?id=${id}`);
  }



  // Deparment

  readDepartment(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${environment.PHP_API_SERVER}/api/department/read.php`);
  }
  createDepartment(module: Department): Observable<Department> {
    return this.httpClient.post<Department>(`${environment.PHP_API_SERVER}/api/department/create.php`, module);
  }
  updateDepartment(module: Department) {
    return this.httpClient.put<Department>(`${environment.PHP_API_SERVER}/api/department/update.php`, module);
  }

  deleteDepartment(id: number) {
    return this.httpClient.delete<Department>(`${environment.PHP_API_SERVER}/api/department/delete.php/?id=${id}`);
  }

  // Lecturer

  readLecturer(): Observable<Lecturer[]> {
    return this.httpClient.get<Lecturer[]>(`${environment.PHP_API_SERVER}/api/lecturer/read.php`);
  }
  createLecturer(module: Lecturer): Observable<Lecturer> {
    return this.httpClient.post<Lecturer>(`${environment.PHP_API_SERVER}/api/lecturer/create.php`, module);
  }
  updateLecturer(module: Lecturer) {
    return this.httpClient.put<Lecturer>(`${environment.PHP_API_SERVER}/api/lecturer/update.php`, module);
  }

  deleteLecturer(id: number) {
    return this.httpClient.delete<Lecturer>(`${environment.PHP_API_SERVER}/api/lecturer/delete.php/?id=${id}`);
  }

  // LecturerResult

  readLecResult(): Observable<any> {
    return this.httpClient.get<any[]>(`${environment.PHP_API_SERVER}/api/lecturerResult/read.php`);
  }

  createLecResult(lecRes): Observable<any> {
    return this.httpClient.post<any>(`${environment.PHP_API_SERVER}/api/lecturerResult/create.php`, lecRes);
  }

  // Roles

  readRole(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.PHP_API_SERVER}/api/role/read.php`);
  }

  createRole(roles): Observable<any> {
    return this.httpClient.post<any>(`${environment.PHP_API_SERVER}/api/role/create.php`, roles);
  }
}
