import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusCommissionService {

  constructor(private http: HttpClient) { }

  getAllCommissions(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/buscommission');
  }

  addCommission(commission: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/buscommission', commission);
  }

  updateCommission(commission: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/buscommission/${commission.id}`, commission);
  }

  deleteCommission(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/buscommission/${id}`);
  }
}
