import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FbAuthService } from '../auth/fb-auth.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FBAuthGuardService implements CanActivate {

  constructor(
    public authService: FbAuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigateByUrl('login');
    }
    return true;
  }
}
