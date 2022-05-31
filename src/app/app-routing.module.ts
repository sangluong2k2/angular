import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { GuardGuard } from './services/guards/guard.guard';



const routes: Routes = [
  { path: "", component:WebsiteLayoutComponent },
  {
    path: "product",canActivate: [GuardGuard], component: ProductsComponent,  children: [
      
      { path: ":id", component: ProductDetailComponent },
      { path: ":id/edit", component: EditProductComponent },
      { path: "add", component: AddProductComponent },
     
    ]
  },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
