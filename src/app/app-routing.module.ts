import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchOrderComponent} from './components/search-order/search-order.component';

const routes: Routes = [
  {path: 'search-order', component:SearchOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
