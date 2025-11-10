import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FirebaseAuth } from '../../auth/firebase-auth';


@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private authenticationService = inject(FirebaseAuth)

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      if (!email || !password) {
        return;
      }
      this.authenticationService.createUser(email, password);
    }
  }
}
