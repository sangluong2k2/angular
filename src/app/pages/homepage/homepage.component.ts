import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  productList: IProduct[] = [
    {
      id: 1,
      name: "product A",
      price: 200,
      status: true
    },
    {
      id: 2,
      name: "product B",
      price: 200,
      status: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
