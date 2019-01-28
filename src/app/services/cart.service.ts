import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart';
import { Product } from '../models/Product';

@Injectable()
export class CartService {
    cart: CartItem[] = [];
    constructor() {

    }

    addToCart(product: Product, quantity): boolean {
        if (this.cart.length > 0 && this.cart.findIndex(e => e.product.name === product.name) >= 0) {
            let index = this.cart.findIndex(e => e.product.name === product.name);
            if (this.cart[index].qty + quantity <= this.cart[index].product.stock) {
                this.cart[index].qty += quantity;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            let cartItem: CartItem = { product: product, qty: quantity }
            this.cart.push(cartItem);
            return true;
        }
    }

    removeFromCart(product) {
        if (this.cart.length > 0 && this.cart.findIndex(e => e.product.name === product.name) >= 0) {
            this.cart.splice(this.cart.findIndex(e => e.product.name === product.name), 1);
        }
    }

    removeAllFromCart() {
        this.cart = [];

    }

    editQty(product, quantity) {
        if (this.cart.length > 0 && this.cart.findIndex(e => e.product.name === product.name) >= 0) {
            let index = this.cart.findIndex(e => e.product.name === product.name);
            if (quantity >= 1) {
                this.cart[index].qty = quantity;
            }
            else {
                this.cart.splice(index, 1);
            }

        }
    }

    removeOne(product, quantity) {
        if (this.cart.length > 0 && this.cart.findIndex(e => e.product.name === product.name) >= 0) {
            let index = this.cart.findIndex(e => e.product.name === product.name);
            if (this.cart[index].qty - quantity >= 1) {
                this.cart[index].qty -= quantity;
            }
            else {
                this.cart.splice(index, 1);
            }
        }
    }

    getCart() {
        return this.cart;
    }

    setCart(cart: CartItem[]) {
        this.cart = cart;
    }
}
