import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
      }  
  `
  ]
})
export class RegisterComponent implements OnInit {

  forma:FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'eMail': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'terms': new FormControl('', Validators.required),

    });
   }

  ngOnInit() {
  }
  onSubmit() {
    console.log("la forma",this.forma);
    console.log("valor forma",this.forma.value);
  }

}
