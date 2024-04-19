import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentBalanceService {
  private apiUrl = 'http://localhost:3000/agentBalance';

  constructor(private http: HttpClient) {}

  addAgentBalance(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
