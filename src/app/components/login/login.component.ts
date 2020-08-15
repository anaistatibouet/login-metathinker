import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public isRegistered: boolean;

  constructor() {}

  // Create form for login
  public ngOnInit() {
    this.isRegistered = true;
  }

  public switch() {
    this.isRegistered = !this.isRegistered;
  }
}
