import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { InventoryItem } from '../models/watterbottle-inventory-item.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  data = inventory;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  onAddItemEvent(item: InventoryItem): void {
   this.cartService.addToCart(item);
  }

}

export const inventory: InventoryItem[] = [
  {
    itemName: "Water Bottle 1",
    itemCost: 10.01,
    itemDescription: "Our First Water Bottle for Sale",
    itemImageUri: "https://www.ikea.com/mx/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg"
  },
  {
    itemName: "Water Bottle 2",
    itemCost: 20,
    itemDescription: "Our Second Water Bottle for Sale"
  },
  {
    itemName: "Water Bottle of Awesome",
    itemCost: 1000.1,
    itemDescription: "One awesome water bottle",
    itemImageUri: "https://www.ikea.com/mx/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg"
  },
  {
    itemName: "No plastic",
    itemCost: 5.43,
    itemDescription: "One awesome water bottle",
    itemImageUri: "https://www.ikea.com/mx/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg"
  },
  {
    itemName: "Blue Water Bottle",
    itemCost: .99,
    itemDescription: "One awesome water bottle",
    itemImageUri: "https://www.ikea.com/mx/en/images/products/ikea-365-water-bottle-dark-grey__0916298_pe785100_s5.jpg"
  },
];