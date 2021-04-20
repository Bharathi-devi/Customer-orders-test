import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';
import { CustomerOdersListComponent } from './components/customer-oders-list/customer-oders-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SearchOrderComponent,
    CustomerOdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
