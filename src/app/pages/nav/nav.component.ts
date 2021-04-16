import { Action } from './../../shared/models/action.model';
import { Component, OnInit } from '@angular/core';
import { ACTIONS } from 'src/app/shared/database/action.database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  actions: Action[] = ACTIONS;

  constructor(private router: Router) { }

  logout(): void {
    this.router.navigateByUrl('login');
  }

  changePwd(): void {
    this.router.navigateByUrl('change');
  }

  ngOnInit(): void { }
}
