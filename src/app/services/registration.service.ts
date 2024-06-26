import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {}

  registerUser(data: any, role: string) {
    const endpoint = role === 'admin' ? 'admins' : 'users';
    return this.http.post(`http://localhost:3000/${endpoint}`, data);
  }
}
