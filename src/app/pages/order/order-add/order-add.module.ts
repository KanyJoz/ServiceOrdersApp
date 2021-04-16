import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAddComponent } from './order-add.component';
import { OrderAddRoutingModule } from './order-add-routing.module';
import { NavModule } from '../../nav/nav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    OrderAddComponent
  ],
  imports: [
    CommonModule,
    OrderAddRoutingModule,
    NavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule
  ],
  exports: [
    OrderAddComponent
  ]
})
export class OrderAddModule { }
