import { Component, OnInit } from '@angular/core';
import { User } from '../../../User';

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

  constructor() {}

  ngOnInit() {}

  onSubmit() {
      console.log(this.user);
  }
}
