import { Component, OnInit } from '@angular/core';
import { User } from '../../../User';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: '',
    password: '',
    email: '',
    username: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
      this.authService.register(this.user)
        .subscribe(response => console.log(response))
  }
}
