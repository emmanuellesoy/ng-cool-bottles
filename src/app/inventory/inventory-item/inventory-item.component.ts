import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InventoryItem } from '../models/watterbottle-inventory-item.model';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit {

  @Input() item: InventoryItem | undefined;

  @Output() addItemEvent: EventEmitter<InventoryItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() : void {
    this.addItemEvent.next(this.item);
  }

}
