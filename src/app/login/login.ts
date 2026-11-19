import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.services';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin() {
    const isValidUser: boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.erreur = false;
      this.router.navigate(['/smartphones']);
    } else {
      this.erreur = true;
    }
  }

  ngOnInit(): void {}
}