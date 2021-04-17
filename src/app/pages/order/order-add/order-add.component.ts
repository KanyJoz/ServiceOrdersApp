import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { getCreateForm } from 'src/app/shared/forms/create.form';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {
  form: FormGroup = getCreateForm();
  states: string[] = [
    'Acknowledged',
    'Rejected',
    'Pending',
    'Held',
    'In Progress',
    'Cancelled',
    'Completed',
    'Failed',
    'Partial',
    'Assessing Cancellation',
    'Pending Cancellation'
  ];
  priorities: string[] = [
    'Top Priority',
    'Medium Priority',
    'Low Priority'
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  visible2 = true;
  selectable2 = true;
  removable2 = true;
  addOnBlur2 = true;

  visible3 = true;
  selectable3 = true;
  removable3 = true;
  addOnBlur3 = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  items: string[] = [];
  parties: string[] = [];
  notes: string[] = [];

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    console.log(this.location.getState());
  }

  addItem(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.items.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeItem(item: string): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  addParty(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.parties.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeParty(party: string): void {
    const index = this.parties.indexOf(party);

    if (index >= 0) {
      this.parties.splice(index, 1);
    }
  }

  addNote(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.notes.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeNote(note: string): void {
    const index = this.notes.indexOf(note);

    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }

  getCurrentClasses(flag: boolean): object {
    if (flag) {
      const currenctClasses = {
        btn__disabled: true,
        btn: false,
        btn__silver: false,
        max__width: true
      };
      return currenctClasses;
    } else {
      const currenctClasses = {
        btn__disabled: false,
        btn: true,
        btn__silver: true,
        max__width: true
      };
      return currenctClasses;
    }
  }

  // TODO: firebase Auth
  create(): void {
    if (this.form.valid) {
      const order = this.form.value;
      order.items = this.items;
      order.parties = this.parties;
      order.notes = this.notes;

      const orderDate = new Date(Date.now());
      order.orderDate = orderDate.toLocaleDateString();
      let days = 7;
      if (order.priority === 'Medium Priority') {
        days = 14;
      } else if (order.priority === 'Low Priority') {
        days = 21;
      }
      orderDate.setDate(orderDate.getDate() + days);
      order.expectedDate = orderDate.toLocaleDateString();

      console.log(order);

      // this.router.navigateByUrl('/home');
      return;
    }
  }
}
