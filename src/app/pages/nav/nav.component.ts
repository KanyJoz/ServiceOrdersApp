import { Action } from './../../shared/models/action.model';
import { Component, OnInit } from '@angular/core';
import { ACTIONS } from 'src/app/shared/database/action.database';
import { Router } from '@angular/router';
import { FbAuthService } from 'src/app/services/auth/fb-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  actions: Action[] = ACTIONS;

  constructor(private router: Router, private fbAuth: FbAuthService) { }

  logout(): void {
    this.fbAuth.SignOut();
  }

  ngOnInit(): void { }
}
