import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<User> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
    };
    return this.httpClient.post<User>('https://reqres.in/api/login', {
      email: email,
      password: password,
      options: options
    });
  }
}
