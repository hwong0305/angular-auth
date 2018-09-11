import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../stores/reducers';
import * as AuthActions from '../../../stores/actions/auth';
import { UserAuth } from '../../../User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserAuth = {
    username: '',
    password: ''
  };

  constructor(
      private authService: AuthService,
      private router: Router,
      private store: Store<fromAuth.AuthState>
      ) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.user).subscribe(response => {
        this.store.dispatch(new AuthActions.Login(response.token))
      this.router.navigate(['/dashboard']);
    });
  }
}
