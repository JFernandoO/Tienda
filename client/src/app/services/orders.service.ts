import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IOrders } from '../interfaces/orders';


@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  url = 'http://localhost:8092';
  constructor(public http: HttpClient) { 

  }

  addOrders(ord:IOrders) {
    console.log(`${this.url}/api/orders/create`);

    let httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache')  
     .set('Access-Control-Allow-Origin','*');

     let options = {
      headers: httpHeaders
      }; 

    return this
            .http
            .post(`${this.url}/api/orders/create`,ord, options);
        


    /*return this
    .http
    .post(`${this.url}/api/orders/create`,JSON.stringify(ord));*/     
  }
}
