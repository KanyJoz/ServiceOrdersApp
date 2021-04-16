import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg.component';
import { RegRoutingModule } from './reg-routing.module';



@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    CommonModule,
    RegRoutingModule
  ],
  exports: [
    RegComponent
  ]
})
export class RegModule { }
