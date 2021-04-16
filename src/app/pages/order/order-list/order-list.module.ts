import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { OrderListRoutingModule } from './order-list-routing.module';
import { NavModule } from '../../nav/nav.module';



@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    NavModule
  ],
  exports: [
    OrderListComponent
  ]
})
export class OrderListModule { }
