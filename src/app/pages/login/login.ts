import { Component, OnDestroy, Signal } from '@angular/core';
import { inject } from '@angular/core';
import { FirebaseAuth } from '../../auth/firebase-auth';
import { ErrorTranslatePipe } from '../../pipes/error-translate-pipe';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ErrorTranslatePipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {
private authenticationService = inject(FirebaseAuth);
error: string | null = null;

  constructor() {
    this.authenticationService.onError.subscribe((msg) => {
      this.error = msg;
    });
  }
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
      this.error = null;
      this.authenticationService.loginUser(email, password);

    }

  }

  ngOnDestroy() {
    this.authenticationService.onError.complete();
  }
 
}
