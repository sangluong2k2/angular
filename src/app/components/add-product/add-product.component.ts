import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: IProduct = {
    name: "",
    price: 0,
    id: 0,
    status: false
  }
  constructor(
    private productServices: ProductService,
    private router:ActivatedRoute
    ) {

   }

  ngOnInit(): void {
  }

  onSubmit(){
   this.productServices.addProduct(this.product).subscribe(data => {
     console.log(data);
     
   })
   
  }

}
