import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './pages/product/product.component';

import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';



registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    AddProductComponent,
    HomepageComponent,
    ProductDetailComponent,
    EditProductComponent,
    SigninComponent,
    SignupComponent,
    WebsiteLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
