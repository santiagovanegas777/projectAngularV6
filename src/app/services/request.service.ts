import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  postData(arg0: { userName: string; userLastname: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

  getApiProducts(): Observable<any> {
      return this.httpClient.get("https://api-ecommerce-gules.vercel.app/products");
  }
  getApiProductsDetail(id:string): Observable<any> {
    return this.httpClient.get(`https://api-ecommerce-gules.vercel.app/products/${id}`); // este es el que hace la petición GET a la API
  }
}
