import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
      this.authService.login(this.user)
        .subscribe(response => console.log(response))
  }
}
