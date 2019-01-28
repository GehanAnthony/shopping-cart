import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { CartResolver } from 'src/app/models/cart-resolver';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,         
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'home',
        component: ShoppingCartComponent,
        resolve: {
          cart: CartResolver
        }
      }
    ])

  ],
  providers: [ProductService, CartService, CartResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
