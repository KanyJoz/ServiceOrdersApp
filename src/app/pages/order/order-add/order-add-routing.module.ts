import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderAddComponent } from './order-add.component';

const routes: Routes = [
    {
        path: '',
        component: OrderAddComponent,
        data: { title: 'ServiceOrdersApp - Create Order' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderAddRoutingModule { }
