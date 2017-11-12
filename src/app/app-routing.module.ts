import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { OrderComponent }        from './order/order.component';
import { PageNotFoundComponent } from './not-found.component';
 
const APP_ROUTES: Routes = [
    { path: 'order', component: OrderComponent },
    { path: '',   redirectTo: 'inventory', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
