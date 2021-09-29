import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart-fab',
  templateUrl: './shopping-cart-fab.component.html',
  styleUrls: ['./shopping-cart-fab.component.scss']
})
export class ShoppingCartFabComponent implements OnInit {

  numberOfItemsInCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

      this.cartService.cart$.subscribe(cartStuff => {
        console.log(`suscribed data -> ${cartStuff.numberOfITems}`);
        this.numberOfItemsInCart = cartStuff.numberOfITems;
      })

  }

}
