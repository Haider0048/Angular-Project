import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }
  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }
  

}
