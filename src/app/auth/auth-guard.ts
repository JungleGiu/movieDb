import { CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';
import { FirebaseAuth } from './firebase-auth';

export const authGuard: CanActivateFn = async (route,state) => {

 const firebaseAuth = inject(FirebaseAuth);
  const router = inject(Router);

  
  const user = await firebaseAuth.waitForAuthState();
  
  if (user) {
    console.log('Utente autenticato:', user.email);
    return true;
  } else {
    console.log('Utente NON autenticato, redirect a login');
    router.navigate(['/login']);
    return false;
  }

};
