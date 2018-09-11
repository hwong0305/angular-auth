import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(token) {
    const httpOptions = {
      headers: {
        'content-type': 'application/json',
        authorization: token
      }
    };

    return this.http.get('http://localhost:8081/users/validate', httpOptions);
  }
}
