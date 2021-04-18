import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthGuardService } from 'src/app/services/guard/fb-auth-guard.service';
import { OrderAddComponent } from './order-add.component';

const routes: Routes = [
    {
        path: '',
        component: OrderAddComponent,
        data: { title: 'ServiceOrdersApp - Create Order' },
        canActivate: [FBAuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderAddRoutingModule { }
