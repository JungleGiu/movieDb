import { Component , inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FirebaseAuth } from '../../../core/auth/firebase-auth';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  auth = inject(FirebaseAuth);
  isLoggedIn = this.auth.isAuthenticated;
}
