import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getHello() {
    return this.http.get(this.baseUrl + 'hello');
  }
}
