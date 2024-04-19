import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  constructor(private http: HttpClient) { }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    // Adjust the API endpoint as per your requirements
    return this.http.post<any>('http://localhost:3000/changepassword', { oldPassword, newPassword,  });
  }
}
