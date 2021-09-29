import { InventoryItem } from "src/app/inventory/models/watterbottle-inventory-item.model";

export interface Cart {
    items: InventoryItem[];
    numberOfITems: number;
    total: number;
};