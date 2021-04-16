import { OrderUpdateComponent } from './order-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: OrderUpdateComponent,
        data: { title: 'ServiceOrdersApp - Update Order' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderUpdateRoutingModule { }
