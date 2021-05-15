import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FbAuthService } from 'src/app/services/auth/fb-auth.service';
import { getChangeForm } from 'src/app/shared/forms/change.form';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent {
  form: FormGroup = getChangeForm();

  constructor(private router: Router, private fbAuth: FbAuthService) { }

  getCurrentClasses(flag: boolean): object {
    if (flag) {
      const currenctClasses = {
        btn__disabled: true,
        btn: false,
        btn__silver: false,
        max__width: true
      };
      return currenctClasses;
    } else {
      const currenctClasses = {
        btn__disabled: false,
        btn: true,
        btn__silver: true,
        max__width: true
      };
      return currenctClasses;
    }
  }

    changePassword(): void {
      if (this.form.valid) {
        // console.log(this.form.value);
        this.fbAuth.ForgotPassword(this.form.value.email);
        this.router.navigateByUrl('login');
      }
    }
}
