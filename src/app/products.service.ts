import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _url = './assets/products.json';
   
  constructor(private http: HttpClient) {
    this.getProducts().subscribe(data => {
      // console.log('data', data);
    });
  }

  // getProducts() {
  //   return this.http.get(this._url)
  //     .map((response: Response)=>response.json());
  // }

  public getProducts(): Observable<any> {
      return this.http.get(this._url);
  }
}