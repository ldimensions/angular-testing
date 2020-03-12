import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public ROOT_URL = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
      return this.http.get(`${this.ROOT_URL}/users`);
  }
  deleteUser(id): Observable<any> {
    return this.http.delete(`${this.ROOT_URL}/posts/${id}`);
  }
}
