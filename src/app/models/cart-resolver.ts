import { CartItem } from "./cart";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CartService } from "../services/cart.service";
import { Injectable } from '@angular/core';

@Injectable()
export class CartResolver implements Resolve<CartItem[]> {

    constructor(private cartService: CartService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): CartItem[] {
        return this.cartService.getCart();
    }
}