import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromAuth from '../../../stores/reducers';
import * as AuthActions from '../../../stores/actions/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn$: boolean;

  constructor(
    private store: Store<fromAuth.AuthState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store
      .pipe(select(fromAuth.selectLoggedIn))
      .subscribe(response => (this.loggedIn$ = response));
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/home']);
  }
}
