import { OrderUpdateComponent } from './order-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthGuardService } from 'src/app/services/guard/fb-auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: OrderUpdateComponent,
        data: { title: 'ServiceOrdersApp - Update Order' },
        canActivate: [FBAuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderUpdateRoutingModule { }
