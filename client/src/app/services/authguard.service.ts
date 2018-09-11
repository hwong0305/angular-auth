import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../stores/reducers';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  token$: string;

  constructor(
      private store: Store<fromAuth.AuthState>,
      private router: Router) {}

  canActivate() {
    this.store
      .pipe(select(fromAuth.selectToken))
      .subscribe(token => (this.token$ = token));

    if (this.token$ === null) {
        this.router.navigate(['/login'])
        return false;
    } else {
        // Need to validate the jsonwebtoken
        return true; 
    }
  }
}