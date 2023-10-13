import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

url = "http://localhost:5000/api/signup"
signup(req :any):Observable<any> {
      return this.http.post<any>(this.url, req);
}

url1 = "http://localhost:5000/api/signin"
signin(req :any):Observable<any> {
      return this.http.post<any>(this.url1, req);
}






}
