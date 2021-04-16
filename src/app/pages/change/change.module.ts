import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeComponent } from './change.component';
import { ChangeRoutingModule } from './change-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { NavModule } from '../nav/nav.module';



@NgModule({
  declarations: [
    ChangeComponent
  ],
  imports: [
    CommonModule,
    ChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [
    ChangeComponent
  ]
})
export class ChangeModule { }
