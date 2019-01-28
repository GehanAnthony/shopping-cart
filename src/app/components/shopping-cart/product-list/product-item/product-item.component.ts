import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../../../../models/cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() fetchCart: EventEmitter<any> = new EventEmitter();

  alert: boolean = false;
  detailsPopUp: boolean = false;
  qty:number;

  
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(quantity) {
    this.product.qty = this.product.qty ? this.product.qty : 0;
    quantity = parseInt(quantity) ? parseInt(quantity) : 1;
    if (this.cartService.addToCart(this.product, quantity)) {
      this.fetchCart.emit(null);
    }
    else {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000)
    }
    this.qty = null;
  }

  removeOneFromCart(quantity) {
    quantity = parseInt(quantity) ? parseInt(quantity) : 1;
    this.cartService.removeOne(this.product, quantity);
    this.fetchCart.emit();
    this.qty = null;
  }

  detailsModalShow() {
    this.detailsPopUp = true;
  }

  closeModal() {
    this.detailsPopUp = false;
  }
}
