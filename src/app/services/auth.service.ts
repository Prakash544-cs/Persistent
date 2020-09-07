import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

import { User } from '../models/user';
import { Music } from '../models/music';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   readonly BASE_URL = 'http://localhost:3000';

  private errMessage: string;

  get errorMessage(): string {
    return this.errMessage;
  }
  set errorMessage(message: string) {
    this.errMessage = message;
  }
  getToken(): string {
    return localStorage.getItem('token');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
    this.errorMessage = '';
   }

  //  logIn(user: User): Observable<User[]>{
  //   const loginUrl = encodeURI('login?email=' + user.email + '&password=' + user.password);
  //   return this.http.get<User[]>(this.BASE_URL + loginUrl);
  // }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, {email, password}, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getSignUpData(): Observable<Music[]> {
    const url = `${this.BASE_URL}/register`; 
  return this.http.get<Music[]>(url, this.httpOptions)
        .pipe(
  catchError(this.errorHandler)
        )
    }
  
  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/register`; 
    return this.http.post<User>(url, {email, password}, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getAllMusics(): Observable<Music[]> {
    const url = `${this.BASE_URL}/musics`;
    return this.http.get<Music[]>(url, this.httpOptions )
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getMusicById(id: number): Observable<Music> {
    const url = `${this.BASE_URL}/musics/`;
    return this.http.get<Music>(url + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  createMusic(song: string, movie: string): Observable<Music> {
    const url = `${this.BASE_URL}/musics`;
    return this.http.post<Music>(url,{song, movie}, this.httpOptions )
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteMusic(id): Observable<any> {
    const url = `${this.BASE_URL}/musics`;
    return this.http.delete(`${this.BASE_URL}/`+'musics/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updateMusic(id, user ): Observable<Music> {
    const url = `${this.BASE_URL}/musics/`;
    return this.http.put<Music>(url + id, user, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
   // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}