import { Component, OnInit } from '@angular/core';
import { shuffle } from 'src/app/utils/app.utils';

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
