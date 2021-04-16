import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeComponent } from './change.component';

const routes: Routes = [
    {
        path: '',
        component: ChangeComponent,
        data: { title: 'ServiceOrdersApp - Change Password' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChangeRoutingModule { }
