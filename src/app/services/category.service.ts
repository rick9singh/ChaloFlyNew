import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, category);
  }

  updateCategory(category: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
