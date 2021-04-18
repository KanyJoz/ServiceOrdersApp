import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthGuardService } from 'src/app/services/guard/fb-auth-guard.service';
import { OrderListComponent } from './order-list.component';

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent,
        data: { title: 'ServiceOrdersApp - List Orders' },
        canActivate: [FBAuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderListRoutingModule { }
