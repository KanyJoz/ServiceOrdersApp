import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { OrderCancelModule } from '../order-cancel/order-cancel.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    OrderCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    OnHoverModule,
    OrderCancelModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    OrderCardComponent
  ]
})
export class OrderCardModule { }
