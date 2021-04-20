import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FbStoreService } from 'src/app/services/store/fb-store.service';
import { Order } from 'src/app/shared/models/order.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  list: Observable<Order[]>;
  filteredList: Observable<Order[]>;
  searchControl = new FormControl();

  constructor(private router: Router, private fbStore: FbStoreService, private location: Location) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    if (this.location.path() === '/list-all'){
      this.list = this.fbStore.getAll('orders');
    } else if (this.location.path() === '/list-completed') {
      this.list = this.fbStore.getCompleted('orders');
    } else if (this.location.path() === '/list-cancelled'){
      this.list = this.fbStore.getCancelled('orders');
    }
  }

  filteredSearch(): void {
    if (this.searchControl.value !== '' && this.searchControl.value) {
      if (this.location.path() === '/list-all'){
        this.list = this.fbStore.getFilteredAll('orders', this.searchControl.value);
      } else if (this.location.path() === '/list-completed') {
        this.list = this.fbStore.getFilteredCompleted('orders', this.searchControl.value);
      } else if (this.location.path() === '/list-cancelled'){
        this.list = this.fbStore.getFilteredCancelled('orders', this.searchControl.value);
      }
    } else {
      this.get();
    }
  }

  onPutOrder(event: Order): void {
    this.searchControl.setValue(event.category);
  }
}
