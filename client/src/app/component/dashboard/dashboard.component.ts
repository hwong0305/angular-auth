import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../stores/reducers';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token$: String;
  user$: Object = {
      name: '',
      username: '',
      email: ''
  };
  constructor(
    private store: Store<fromAuth.AuthState>,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.store
      .pipe(select(fromAuth.selectToken))
      .subscribe(token => (this.token$ = token));

    this.profileService
      .getProfile(this.token$)
      .subscribe(user => this.user$ = user);
  }
}
