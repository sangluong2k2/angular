import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "product"
  constructor() { }

  ngOnInit(): void {
  }


  myName = "Sang"
  productName: string = "Product A";
  productPrice: number = 20;
  productStatus: boolean = true;
  productInfo: { id: number, name: string, price: number, status: boolean } = {
    id: 1,
    name: "product A",
    price: 200,
    status: true
  }

  productList: { id: number, name: string, price: number, status: boolean }[] = [
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

  onHandleClick() {
    this.productStatus = !this.productStatus
  }
  RemoveProduct(id:number) {
      
      alert("Muốn xóa k")
      this.productList = this.productList.filter(product => product.id !== id)
      
  }
  onHandleKeyPress(event: any){
    this.title = event.target.value
  }
  onHandleAdd(){

  }
  

}
