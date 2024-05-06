import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  username ="";
  password ="";
  errorMsg ="";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { 

    if (this.auth.authenticate(this.username, this.password)) {
      // Authentication successful, perform necessary actions (e.g., navigate to a different page)
      console.log('Authentication successful');
      this.errorMsg = '';
    } else {
      // Authentication failed, display error message
      console.log('Authentication failed');
      this.errorMsg = 'Invalid username or password';
    }
  }
  
  login() {
    this.router.navigate(['home']);
  }



}
