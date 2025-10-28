import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from '../../env';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuth {

  constructor() {
    initializeApp(environment.firebase);
  }
}
