import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserAuth } from '../../User';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

interface Authenticate {
    user: User;
    token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user:User): Observable<Authenticate> {
      return this.http.post<Authenticate>('http://localhost:8081/users/register', user, httpOptions)
  }

  login(user:UserAuth): Observable<Authenticate> {
      return this.http.post<Authenticate>('http://localhost:8081/users/login', user, httpOptions)
  }
}
