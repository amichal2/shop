import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { InventoryListComponent }   from './inventory-list.component';
import { InventoryDetailComponent } from './inventory-detail.component';
 
const INVENTORY_ROUTES: Routes = [
  { path: 'inventory', component: InventoryListComponent },
  { path: 'inventory/:id', component: InventoryDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(INVENTORY_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class InventoryRoutingModule { }
