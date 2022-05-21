import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!: IProduct[];

  constructor(private productServices: ProductService) {
    this.showProducts();
   }

  ngOnInit(): void {
  }
  showProducts(){
    this.productServices.getProducts().subscribe(data => {this.productList = data
    })
  }
  onRemoveProduct(id:number){
    this.productServices.removeProduct(id).subscribe(() => {
      this.productList = this.productList.filter(item => item.id !== id) 
    })
  }
  
}
