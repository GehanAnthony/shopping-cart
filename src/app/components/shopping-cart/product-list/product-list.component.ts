import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() fetchCart: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  getCart() {
    this.fetchCart.emit(null);
  }
}
