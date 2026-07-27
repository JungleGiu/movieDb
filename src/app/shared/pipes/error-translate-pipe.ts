import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorTranslate',
  standalone: true,
})
export class ErrorTranslatePipe implements PipeTransform {
 private readonly errorMessages: Record<string, string> = {
    'auth/email-already-in-use': 'This email is already in use',
    'auth/invalid-email': 'Email not valid',
    'auth/weak-password': 'Password must have at least 6 characters',
    'auth/user-not-found': 'User not found',
    'auth/wrong-password': 'Password not valid',
    'auth/invalid-credential': 'Invalid credentials',
    'auth/too-many-requests': 'Too many requests, please try again later',
    'auth/network-request-failed': 'Network error, please try again later',
  };

  transform(value: string | null | undefined): string {
    if (!value) return '';
    return this.errorMessages[value] || value;
  }
}
