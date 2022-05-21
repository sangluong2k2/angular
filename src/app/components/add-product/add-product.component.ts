import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: any 
  constructor(
    private productServices: ProductService,
    private router:ActivatedRoute
    ) {

   }

  ngOnInit(): void {
  }

  onSubmit(){
   console.log( this.productServices.addProduct(this.product).subscribe(data => this.product = data));
   
  }

}
