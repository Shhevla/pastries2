import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Users } from './pastrie';
import { map, Observable, firstValueFrom } from 'rxjs';
import { PastrieService } from './pastrie.service';
import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLogin : boolean = false;
  whoIsLogin: string = "";
  constructor(private http : HttpClient, private ps : PastrieService) { }

  async login(email: string, password: string): Promise<any> {
    let users: Users[] = [];
    await this.ps.UsersArray().then(data => {users = data});
    const isPromise = new Promise<any>((resolve, reject) => {
      for (let i = 0; i < users.length ; i++) {
        if ((email == users[i].email) && (password == users[i].password)) {
          env.isLogin = true;
          env.Users = users[i].email;
          resolve("Accept");
        }
      }
        reject("false");
    });
    return(isPromise);
  }

  isUserLogin(): boolean {
    return env.isLogin;     
  }
  isNameLogin(): string {
    return env.Users;
  }

  logout(): void {
    env.Users = "";
    env.isLogin = false;
  }
}
