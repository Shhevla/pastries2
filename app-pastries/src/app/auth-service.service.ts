import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Users } from './pastrie';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http : HttpClient) { }

  // méthode d'authentification
  auth(email: string, password: string): boolean {
    if (email == "admin" && password == "00000")
      return true; // TODO
    else
      return false;
}
  login(email: string, password: string): Promise<any> {
    
    const isPromise = new Promise<any>((resolve, reject) => {
      const obse: Observable<Users[]> = this.http.get<Users[]>("http://localhost:8000/users");
      obse.pipe(map(data => { data = data.filter(word => word.email == email && word.password == password); console.log(data);}));
      if ((email == "admin") && (password == "00000")) {
        resolve("Accept");
      } else {
        reject("false");
      }
    });
    return(isPromise);
  }
}
