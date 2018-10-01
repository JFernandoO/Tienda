import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() { }
}

export interface User {
  Email: string;
  Password: string;
}
