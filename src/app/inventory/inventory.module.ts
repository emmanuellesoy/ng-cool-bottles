import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { MatCardModule } from "@angular/material/card";
import { InventoryImagePipe } from './pipes/inventory-image.pipe';
import { MatButtonModule } from "@angular/material/button";
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryItemComponent,
    InventoryImagePipe
  ],
  exports: [
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CartModule
  ]
})
export class InventoryModule { }
