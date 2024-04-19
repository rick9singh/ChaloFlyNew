import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankUserDetailsService {


  constructor(private http: HttpClient) { }

  getAllDetails(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/bankuserdetails');
  }

  addBankDetails(BankDetails: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/bankuserdetails', BankDetails);
  }

  updateBankDetails(BankDetails: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/bankuserdetails/${BankDetails.id}`, BankDetails);
  }

  deleteBankDetails(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/bankuserdetails/${id}`);
  }
}
