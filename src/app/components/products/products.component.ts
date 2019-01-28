import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cart: CartItem[];
  alert: boolean = false;
  total: number = 0;
  showCheckoutConfirmation: boolean = false;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
    this.getCartTotal();
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  deteteItem(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product);
    this.getCart();
    this.getCartTotal();
  }

  editItem(cartItem: CartItem, quantity) {
    if (parseInt(quantity) <= cartItem.product.stock) {
      this.cartService.editQty(cartItem.product, parseInt(quantity));
      this.getCart();
      this.getCartTotal();
    }
    else {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000)
    }
  }

  checkoutCart() {
    this.cartService.removeAllFromCart();
    this.getCart();
    this.showCheckoutConfirmation = true;
    setTimeout(() => {
      this.showCheckoutConfirmation = false;
    }, 3000)
  }

  getCartTotal() {
    this.total = 0;
    this.cart.forEach(cartItem => {
      this.total = this.total + (cartItem.qty * cartItem.product.price);
    });
  }

}
