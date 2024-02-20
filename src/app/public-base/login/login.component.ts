import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login(event: any) {
    event.preventDefault(); // Prevent default form submission behavior

    this.email = event.target.elements.email.value;
    this.password = event.target.elements.password.value;

    if (this.email === 'admin@gmail.com' && this.password === 'password') {
      console.log("user", this.email, this.password)
      this.router.navigate(['/privatebase/students/showstudent']);
    } else {
      console.log("no user", this.email, this.password)      
    }
  }

}
