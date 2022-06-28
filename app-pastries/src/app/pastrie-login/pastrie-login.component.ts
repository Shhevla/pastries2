import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../pastrie'
import { AuthServiceService } from '../auth-service.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-pastrie-login',
  templateUrl: './pastrie-login.component.html',
  styleUrls: ['./pastrie-login.component.scss']
})
export class PastrieLoginComponent implements OnInit {
  modelUser :User = new User('','', '');
  checkAuth: boolean |null = null;
  checkPromise: Promise<string> | null = null;

  constructor(private lg : AuthServiceService, private Router: Router) { }

  ngOnInit(): void {
  }

  // récupération des données du formulaire
  onSubmit(form: NgForm): void {
    this.checkPromise = this.lg.login(this.modelUser.email, this.modelUser.password);
    
    this.checkPromise.then(() => {
      this.checkAuth = true;
      this.Router.navigate(['/dashboard']);
    }).catch (() => {
      this.checkAuth = false;
    });
  }

}
