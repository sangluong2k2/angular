import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "product/:id", component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
