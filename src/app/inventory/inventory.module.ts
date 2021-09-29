import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { MatCardModule } from "@angular/material/card";
import { InventoryImagePipe } from './pipes/inventory-image.pipe';


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
  ]
})
export class InventoryModule { }
