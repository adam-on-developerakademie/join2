import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  onSubmit(): void {
    this.router.navigate(['contacts']);
  }

  onGuestLogin(): void {
    this.router.navigate(['contacts']);
  }

  resetForm(): void {
    this.email = '';
    this.password = '';
  }
}
