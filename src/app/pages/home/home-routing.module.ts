import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthGuardService } from 'src/app/services/guard/fb-auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'ServiceOrdersApp - Admin Panel' },
        canActivate: [FBAuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
