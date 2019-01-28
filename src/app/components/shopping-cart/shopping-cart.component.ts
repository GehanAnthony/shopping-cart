import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Http, Response } from '@angular/http';
import { Observable, throwError, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  products: Product[];
  cart: CartItem[];
  initialProducts: Product[];
  text:string;

  ngOnInit() {
    this.getProductData();

    this.route.data.subscribe(({ cart }) => {
      this.cart = cart;
    });
  }

  getProductData() {
    this.productService.getAllproducts().subscribe(
      data => {
        this.products = data.json().products;
        this.initialProducts = this.products
      }
    );
    return this.products;
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  filterProductsByPrice(values) {
    this.products = this.initialProducts;
    this.products = this.products.filter(e => e.price > values.max && e.price < values.min);
  }

  searchProducts(text: string) {
    this.products = this.initialProducts;
    if (text) {
      this.products = this.products.filter(e => e.name.toLowerCase().includes(text.toLowerCase()));
    }
    this.text = null;
  }
}
