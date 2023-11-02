import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: string = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Pagination<Product[]>> {
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products?pageSize=50');
  }
}
