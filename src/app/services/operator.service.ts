import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  apiUrl: string = 'http://localhost:3000/operators';

  constructor(private http: HttpClient) { }

  getOperators(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addOperator(operatorData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, operatorData);
  }

  updateOperator(operatorData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${operatorData.id}`, operatorData);
  }

  deleteOperator(operatorId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${operatorId}`);
  }
}
