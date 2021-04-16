import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderUpdateComponent } from './order-update.component';
import { OrderUpdateRoutingModule } from './order-update-routing.module';



@NgModule({
  declarations: [
    OrderUpdateComponent
  ],
  imports: [
    CommonModule,
    OrderUpdateRoutingModule
  ],
  exports: [
    OrderUpdateComponent
  ]
})
export class OrderUpdateModule { }
