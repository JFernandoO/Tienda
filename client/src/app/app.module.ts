import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule  } from 'ngx-bootstrap/timepicker';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

// Routes
import { APP_ROUTING } from "./app.routes";
import { AboutComponent } from './components/about/about.component';
import { ProductlistComponent } from './components/productlist/productlist.component'; 
import { ProductsService } from './services/products.service';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent,
    AboutComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule, 
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [ProductsService, OrdersService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
