import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateNumber } from 'src/app/utils/app.utils';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public isLinear = false;
  public identityGroup: FormGroup;
  public emailGroup: FormGroup;
  public pwdGroup: FormGroup;
  public errorMail: boolean = false;
  public hide: boolean = true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.identityGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.emailGroup = this._formBuilder.group({
      userMail: ['', Validators.required],
    });
    this.pwdGroup = this._formBuilder.group({
      password: ['', Validators.required],
    });
  }

  public keyPress(event: any) {
    return validateNumber(event);
  }

  public validateEmail(): boolean {
    if (!this.emailGroup.get('userMail').valid) {
      this.errorMail = true;
    }
    return this.errorMail;
  }
}
