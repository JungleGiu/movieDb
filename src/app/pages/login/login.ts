import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FirebaseAuth } from '../../auth/firebase-auth';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
private authenticationService = inject(FirebaseAuth);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      if (!email || !password) {
        return;
      }
      this.authenticationService.loginUser(email, password);
    }
  }
}
