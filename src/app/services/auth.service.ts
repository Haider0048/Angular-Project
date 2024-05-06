import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentials: { username: string, password: string }[] = [
    { username: 'haider', password: '91120' },
    { username: 'saim', password: '1434' },
    // Add more credentials as needed
  ];

  constructor( private router:Router) { }


  authenticate(username: string, password: string): boolean {
    // Check if the provided credentials match any in the array
    return this.credentials.some(cred => cred.username === username && cred.password === password);
  }


  login() {
    this.router.navigate(['home']);
  }

  logout(){
    this.router.navigate(['login']);
  }
}
   







