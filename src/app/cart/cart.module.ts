import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { ShoppingCartFabComponent } from './shopping-cart-fab/shopping-cart-fab.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    ShoppingCartFabComponent
  ],
  exports: [
    ShoppingCartFabComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
