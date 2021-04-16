import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'reg',
    loadChildren: () => import('./pages/reg/reg.module').then(m => m.RegModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/order/order-add/order-add.module').then(m => m.OrderAddModule),
  },
  {
    path: 'list-completed',
    loadChildren: () => import('./pages/order/order-list/order-list.module').then(m => m.OrderListModule),
  },
  {
    path: 'list-cancelled',
    loadChildren: () => import('./pages/order/order-list/order-list.module').then(m => m.OrderListModule),
  },
  {
    path: 'list-all',
    loadChildren: () => import('./pages/order/order-list/order-list.module').then(m => m.OrderListModule),
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/order/order-update/order-update.module').then(m => m.OrderUpdateModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
