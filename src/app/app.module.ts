import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderComponent } from './order/order.component';

const APP_ROUTES: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'order', component: OrderComponent },
  { path: '',   redirectTo: 'inventory', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    InventoryComponent,
    OrderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
