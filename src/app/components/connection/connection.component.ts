import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
})
export class ConnectionComponent implements OnInit {
  // Declaration variables
  public signIn: boolean = true;
  public keys1: Array<number> = [];
  public keys2: Array<number> = [];
  public showError: boolean = false;
  public userMail: String = '';
  public pwd: String = '';
  public hide: boolean = true;

  constructor() {}

  ngOnInit(): void {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffled = shuffle(arr);
    this.keys1 = shuffled[0];
    this.keys2 = shuffled[1];
  }

  public login(): void {
    if (!this.userMail || !this.pwd) {
      this.showError = true;
    }
  }

  // Password with virtualkeyboard
  public touch($event) {
    this.showError = false;
    if (this.pwd.length < 6) {
      this.pwd += $event;
    }
  }

  // Reset all form fields
  public clearPwd() {
    this.pwd = '';
    this.showError = false;
  }
  public clearUserMail() {
    this.userMail = '';
    this.showError = false;
  }
}

function shuffle(a: Array<any>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return [a.slice(0, 5), a.slice(5, 10)];
}
