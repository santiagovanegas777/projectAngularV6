import { ProductApiInterface,ProductInterface } from '../models/products.models';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }


  getApiProducts(): Observable<any> {

    return this.httpClient.get<ProductApiInterface>('https://api-ecommerce-gules.vercel.app/products')
    }

}
