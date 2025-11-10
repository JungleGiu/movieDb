import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { inject } from '@angular/core';
import { FirebaseAuth } from '../../auth/firebase-auth';
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
