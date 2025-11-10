import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from '../../env';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuth {
  
firebaseApp = initializeApp(environment.firebase);
auth = getAuth(this.firebaseApp);

createUser(email: string, password: string){
  return createUserWithEmailAndPassword(this.auth, email, password);
}
loginUser(email: string, password: string){
  return signInWithEmailAndPassword(this.auth, email, password);
}

}

