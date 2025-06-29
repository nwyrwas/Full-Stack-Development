import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Authentication } from '../services/authentication';
import { User } from '../models/user';

@Component({
imports: [CommonModule, FormsModule],
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public formError: string = '';
  submitted = false;

  credentials = {
  name: '',
  email: '',
  password: ''
  };

  constructor(
  private router: Router,
  private authenticationService: Authentication
  ) { }

  ngOnInit() {}

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
      } else {
        this.doLogin();
      }
  }

  private doLogin(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    this.authenticationService.login(newUser,
      this.credentials.password);
    
    if (this.authenticationService.isLoggedIn())
    {
      this.router.navigate(['']);
    } else {
      var timer = setTimeout(() => {
        if (this.authenticationService.isLoggedIn())
        {
          this.router.navigate(['']);
        }
      }, 3000);
    }
  }
}