import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthGuardService } from 'src/app/services/guard/fb-auth-guard.service';
import { ChangeComponent } from './change.component';

const routes: Routes = [
    {
        path: '',
        component: ChangeComponent,
        data: { title: 'ServiceOrdersApp - Change Password' },
        canActivate: [FBAuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChangeRoutingModule { }
