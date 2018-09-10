import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../../stores/reducers';
import * as AuthActions from '../../../stores/actions/auth';    

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<fromAuth.AuthState>) { }

  loggedIn$: boolean;

  ngOnInit() {
      this.store.pipe(select(fromAuth.selectLoggedIn))
        .subscribe(
            response => this.loggedIn$ = response
        )
  }

}
