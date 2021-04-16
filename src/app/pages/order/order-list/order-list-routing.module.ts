import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list.component';

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent,
        data: { title: 'ServiceOrdersApp - List Orders' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderListRoutingModule { }
