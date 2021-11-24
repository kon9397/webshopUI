import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URi: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.URi + '/api/products');
  }
}
