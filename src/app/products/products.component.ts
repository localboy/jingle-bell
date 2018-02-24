import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../products.service';
// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class ProductService {
//   private _url = 'assets/products.json';
  
//   constructor(private _http: Http) {}

//   getProducts() {
//     return this._http.get(this._url)
//       .map((response: Response)=>response.json());
//   }
// }

export class Hero {
  id: number;
  code: string;
  category: string;
  name: string;
  src: string;
  description: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class ProductsComponent implements OnInit {
  products:Hero[];

  constructor(private _productservice: ProductService) { }
  ngOnInit() {
    // this._productservice.getProducts()
    //   .subscribe(data => {
    //     this.products=data;
    //     console.log('products', this.products);
    //   });
    //   console.log('products', this.products);
    this.getHeroes();
  }

  getHeroes(): void {
    this._productservice.getProducts()
    .subscribe(heroes => this.products = heroes);
  }

  // getProducts(): void{
  //   this._productservice.getProducts()
  //     .subscribe(data => {
  //       this.products=data;
  //     });
  // }


}
