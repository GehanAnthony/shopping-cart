import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: CartItem[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.cart) {
      this.cart = changes.cart.currentValue;
    }
  }
}
