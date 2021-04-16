import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ORDERS_FILTERED } from 'src/app/shared/database/order-filtered.database';
import { ORDERS } from 'src/app/shared/database/order.database';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  title = '';
  list: Order[] = ORDERS;
  filteredList: Order[] = ORDERS_FILTERED;
  searchControl = new FormControl();

  constructor(/*rivate service: FbBaseService<Game>*/ private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/list-all') { this.title = 'Search All Orders'; }
    else if (this.router.url === '/list-completed') { this.title = 'Search Completed Orders'; }
    else if (this.router.url === '/list-cancelled') { this.title = 'Search Cancelled Orders'; }
    // this.get();
    /* this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this._filter(value))
      ); */
    }

  get(): void {
    // this.list = this.service.get('games');
  }

  filteredSearch(): void {
    // console.log(this.searchControl.value);
    this.list = this.filteredList;
  }

  // private _filter(value: string): string[] {
    // const filterValue = value.toLowerCase();
    // return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
}
