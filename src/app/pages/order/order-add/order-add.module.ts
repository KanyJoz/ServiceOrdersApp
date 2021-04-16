import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAddComponent } from './order-add.component';
import { OrderAddRoutingModule } from './order-add-routing.module';
import { NavModule } from '../../nav/nav.module';



@NgModule({
  declarations: [
    OrderAddComponent
  ],
  imports: [
    CommonModule,
    OrderAddRoutingModule,
    NavModule
  ],
  exports: [
    OrderAddComponent
  ]
})
export class OrderAddModule { }
