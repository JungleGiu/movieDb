import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from '../../env';
import { getAuth,
   onAuthStateChanged,
    createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuth {
  
firebaseApp = initializeApp(environment.firebase);
auth = getAuth(this.firebaseApp);
isUserLogged = onAuthStateChanged(this.auth, (user) => {
  if(user){
   return true;
  }
  return false;
});

createUser = async (email: string, password: string) =>{
  try{
    const userCredentials = await createUserWithEmailAndPassword(this.auth, email, password);
     console.log('creado', userCredentials.user);
  }catch(error){
   return console.log(error);
  }
}
loginUser = async(email: string, password: string) =>{
  try{
    const userCredentials = await signInWithEmailAndPassword(this.auth, email, password);
     console.log('logueado', userCredentials.user);
  }catch(error){
   return console.log(error);
  }
}

logoutUser = async() => {
  try{
    await signOut(this.auth);
  }catch(error){
   return console.log(error);
  }
}

}

