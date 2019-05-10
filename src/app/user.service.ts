import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  endPoint = 'http://localhost:9000/api/users/';

  login(payload): Observable<any> {
    return this.http.post<any>(this.endPoint + 'login', payload)
  }

  regsiterUser(payload): Observable<any> {
    return this.http.post<any>(this.endPoint + 'register', payload)
  }
}
