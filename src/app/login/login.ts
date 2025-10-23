import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
const url = 'http://localhost:8080/api/auth/login'; // change endpoint if different
    const payload = { username: this.username, password: this.password };

    // POST to backend and navigate on success
    this.http.post<{ token?: string }>(url, payload).subscribe({
      next: (res) => {
        if (res?.token) {
          localStorage.setItem('auth_token', res.token); // store token if returned
        }
        this.router.navigate(['']); // go to home on success
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Login failed: ' + (err?.error?.message || err.statusText || 'unknown error'));
      }
    });  }
}