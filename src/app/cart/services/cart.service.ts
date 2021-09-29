import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InventoryItem } from 'src/app/inventory/models/watterbottle-inventory-item.model';
import { Cart } from '../modules/cart.module';

@Injectable()
export class CartService {

private readonly cart: BehaviorSubject<Cart>;

get cart$(): Observable<Cart> {
  return this.cart.asObservable();
}

  constructor() { 
    this.cart = new BehaviorSubject<Cart>({
      items: [],
      numberOfITems: 0,
      total: 0
    })
  }

  addToCart(item: InventoryItem): void {
    const currentCart = this.cart.getValue();
    
    const newItemCollection: InventoryItem[] = [
      ...currentCart.items,
      item
    ];

    const newCart: Cart = {
      numberOfITems: newItemCollection.length,
      total: currentCart.total + item.itemCost, //in real life better reduce and reclaculate the total
      items: newItemCollection
    }
    this.cart.next(newCart);
  }
}
