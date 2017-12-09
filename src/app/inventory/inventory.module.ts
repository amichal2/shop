import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { InventoryListComponent }   from './inventory-list.component';
import { InventoryDetailComponent } from './inventory-detail.component';
import { InventoryService } from './inventory.service';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule
  ],
  declarations: [
    InventoryListComponent,
    InventoryDetailComponent
  ],
  providers: [ InventoryService ]
})
export class InventoryModule { }
