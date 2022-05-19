import { Component } from '@angular/core';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // productList: IProduct[] = [
  //   {
  //     id: 1,
  //     name: "product A",
  //     price: 200,
  //     status: true
  //   },
  //   {
  //     id: 2,
  //     name: "product B",
  //     price: 200,
  //     status: false
  //   }
  // ]
  // onHandleAdd(product: any) {
  //   this.productList.push(product)
  // };
  title = 'angular';
  myName = "Sang"
}
