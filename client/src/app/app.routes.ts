import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductlistComponent } from "./components/productlist/productlist.component";

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'order', component: ProductlistComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
