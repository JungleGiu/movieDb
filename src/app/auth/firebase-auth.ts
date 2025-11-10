import { Injectable, signal, Signal, inject, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Router } from '@angular/router';
import { environment } from '../../env';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';


@Injectable({
  providedIn: 'root',
})
export class FirebaseAuth {
  firebaseApp = initializeApp(environment.firebase);
  auth = getAuth(this.firebaseApp);
  router = inject(Router);
  private _isAuthenticated = signal<boolean>(false);
  public isAuthenticated: Signal<boolean> = this._isAuthenticated.asReadonly();

  private _currentUser = signal<User | null>(null);
  public currentUser: Signal<User | null> = this._currentUser.asReadonly();

  onError = new EventEmitter<string>();
  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this._currentUser.set(user);
      this._isAuthenticated.set(user !== null);
      console.log('Auth state changed:', user ? 'logged in' : 'logged out');
    });
  }

  waitForAuthState(): Promise<User | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
  }

  createUser = async (email: string, password: string) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('User created', userCredentials.user);
      this.router.navigate(['/movies']);
    } catch (error : any) {
       this.onError.emit(error.code);
       console.log(error);
    }
  };
  loginUser = async (email: string, password: string) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('User logged in', userCredentials.user);
      this.router.navigate(['/movies']);
    
    } catch (error : any) {
      this.onError.emit(error.code);
      console.log(error);
    }
  };

  logoutUser = async () => {
    try {
      await signOut(this.auth);
    } catch (error) {
      return console.log(error);
    }
  };
}
