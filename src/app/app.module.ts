import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }     from './app.component';
import { InventoryModule }  from './inventory/inventory.module';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent }  from './not-found.component';
import { OrderComponent }         from './order/order.component';

@NgModule({
  imports: [
    BrowserModule,
    InventoryModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OrderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
