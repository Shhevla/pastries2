import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }

  // méthode d'authentification
  auth(email: string, password: string): boolean {
    if (email == "admin" && password == "00000")
      return true; // TODO
    else
      return false;
}
  login(email: string, password: string): Promise<any> {
    const isPromise = new Promise<any>((resolve, reject) => {
      if ((email == "admin") && (password == "00000")) {
        resolve("Accept");
      } else {
        reject("false");
      }
    });
    return(isPromise);
  }
}
