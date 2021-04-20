import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/shared/models/order.model';
import { OrderCancelComponent } from '../order-cancel/order-cancel.component';
import { FbStoreService } from 'src/app/services/store/fb-store.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
  @Input() order?: Order;

  constructor(private dialog: MatDialog, private router: Router, private fbStore: FbStoreService) { }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderCancelComponent, {});

    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.order.cancellationReason = res.reason;
        const date = new Date(Date.now());
        this.order.cancellationDate = date.toLocaleDateString();

        this.fbStore.add('orders', this.order, this.order.id);
      }
    }, err => {
      console.warn(err);
    });
  }

  updateOrder(): void {
    this.router.navigateByUrl('add', { state: this.order});
  }
}
