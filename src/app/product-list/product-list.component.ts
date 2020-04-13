import { Component } from '@angular/core';

import { StarRatingComponent } from 'ng-starrating';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  product;
  products = products;

  share() {
    window.alert('Produto compartilhado.');
  }

  onNotify() {
    window.alert('Será avisado quando disponível.');
  }

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
           New Value: ${$event.newValue},
           Checked Color: ${$event.starRating.checkedcolor},
           Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  constructor(private cartService: CartService) {
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Este produto foi adicionado ao seu carrinho!');
  }

}
