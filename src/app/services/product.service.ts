import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    private apiUrl = 'http://cat-store-api.frostdigital.se/api';
    products: Product[];
    constructor(private http: Http) {
    }

    getAllproducts() {
        let product = this.http.get(this.apiUrl)
        return product;
    }
}
