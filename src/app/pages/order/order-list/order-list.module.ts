import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { OrderListRoutingModule } from './order-list-routing.module';
import { NavModule } from '../../nav/nav.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { OrderCardModule } from '../order-card/order-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OrderCancelModule } from '../order-cancel/order-cancel.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    NavModule,
    MatToolbarModule,
    ContainerModule,
    OrderCardModule,
    OrderCancelModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    OrderListComponent
  ]
})
export class OrderListModule { }
