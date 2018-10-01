import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:8096';
  constructor(public http: HttpClient) { 

  }

  getProducts() {
    return this
            .http
            .get(`${this.url}/api/products`);
        }
}

export interface IProc {
  id : string;
  name : string;
  catalogue : string;
  stock : number;
  price : number;
}