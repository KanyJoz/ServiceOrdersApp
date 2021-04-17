import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/shared/models/order.model';
import { OrderCancelComponent } from '../order-cancel/order-cancel.component';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
  @Input() order?: Order;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderCancelComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((order: Order) => {
      console.log(order);
      // TODO: cancelDate
      // if (game?.title) {
        //this.service.add('games', game);
      // }
    }, err => {
      console.warn(err);
    });
  }

  updateOrder(): void {
    this.router.navigateByUrl('add', { state: this.order});
  }
}
