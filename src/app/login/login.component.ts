import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IAccount} from "../interfaces/iaccount";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLogin = new EventEmitter<IAccount>();

  username!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onLogin.emit({
      username: this.username,
      password: this.password
    })
  }

}
