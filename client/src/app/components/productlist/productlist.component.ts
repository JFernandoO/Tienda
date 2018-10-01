import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../interfaces/products'; 
import { Subject } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { OrdersService } from '../../services/orders.service';
import { IOrders, IOrdersDetails } from '../../interfaces/orders';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: IProducts[] = [];
  orderShop: IOrders;
  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  listDetails: IOrdersDetails[] = [];

  typePer = ['CC', 'NIT',];
  sumQuantities: number = 0;

  constructor(public _productService: ProductsService, public _orderService: OrdersService) {  
    //this.getAllProducts();
    /*this.products = [
      {
        product_id : "pd100",
        product_img : "https://rukminim1.flixcart.com/image/312/312/j7hxmkw0/computer/b/g/j/hp-na-laptop-original-imaexq9fgzxzhmas.jpeg?q=70",
        product_name : "Laptop",
        product_price : 30000,
        product_quality : 3
      },
      {
        product_id : "pd101",
        product_img : "https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg",
        product_name : "Mobile",
        product_price : 54000,
        product_quality : 5
      },
      {
        product_id : "pd102",
        product_img : "https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2014/tvv/cat/tv/tv_size4a.jpg;maxHeight=333;maxWidth=333",
        product_name : "Television",
        product_price : 22000,
        product_quality : 6
      },
      {
        product_id : "pd103",
        product_img : "https://rukminim1.flixcart.com/image/312/312/j6gs6fk0/headphone/z/d/h/apple-beats-solo3-original-imaewxpd7eqgqqvq.jpeg?q=70",
        product_name : "Headphone",
        product_price : 1300,
        product_quality : 13
      }
    ];*/
   }

   ngOnInit() {

    this.orderShop = 
      {
          namePerson: "",
          typePerson: "",
          numberPerson: "",
          state: "abierto",
          totalQuantity: 0,
          totalCost: 0,
          address: "",
          dateOrder: "",
          timeOrder: "",
          orderDetails: null
      };

    this.getAllProducts();
    this.totalPrice();
  }

  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].price * this.products[i].quantity);
    }
  }

  add(pid){
    
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].id === pid)
      {  
        console.log(this.products[i].quantity);
        this.products[i].quantity += 1;
        console.log(this.products[i].quantity);
      }           
    }
    this.totalPrice();
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].id === pid)
      {  
        if(this.products[i].quantity != 0)
          this.products[i].quantity -= 1;
      }           
    }
    this.totalPrice();
  }

  getAllProducts():void{
    this
      ._productService
      .getProducts()
      .subscribe((data: IProducts[]) => {
        this.products = data;

        for(var i=0;i<this.products.length;i++){
          this.products[i].quantity = 0;
        }

    });
  }

  sendOrder(){

    /*this.orderShop = 
      {
          namePerson: "a1",
          typePerson: "2",
          numberPerson: "123",
          state: "open",
          totalQuantity: 3,
          totalCost: 2000,
          address: "cra 1",
          dateOrder: "12/12/2018 03:25 PM",
          timeOrder: "",
          orderDetails: null
          [
            {
              idProduct: 1,
              quantity: 2,
              cost: 100
            }	
          ]
      };*/ 
      
      this.sumQuantities = 0;
      
      for (let product1 of this.products) {
        if(product1.quantity > 0){
          let detail = {
            idProduct : product1.id,
            quantity : product1.quantity,
            cost : product1.price
          };  
          this.sumQuantities += product1.quantity;
          
          if(this.sumQuantities <= 5)
          {
            this.listDetails.push(detail);
          }else{
            alert("No se pueden realizar pedidos de mas de 5 prendas");
            return;
          }
        }
      }

      console.log("Cantidad:"+this.sumQuantities);
      if(this.sumQuantities == 0)
      {
        alert("Debe indicar la cantidad de al menos un artículo");
        return;
      }
      


      this.orderShop.orderDetails = this.listDetails;
      this.orderShop.totalQuantity = this.sumQuantities;
      this.orderShop.totalCost = this.total;

      console.log(this.orderShop.totalQuantity);
      console.log("costo total:"+this.orderShop.totalCost);
      console.log("Json:"+this.orderShop);
      

    this._orderService.addOrders(this.orderShop).subscribe(
      data => {
          console.log("POST Request is successful ", data);
          alert("Orden creada, gracias por su compra!");
      },
      error => {
          console.log("Error", error);
        }
    );

    return false;
  }
}
