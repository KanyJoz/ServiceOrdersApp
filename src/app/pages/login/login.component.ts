import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FbAuthService } from 'src/app/services/auth/fb-auth.service';
import { getLoginForm } from 'src/app/shared/forms/login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = getLoginForm();

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

    // TODO: firebase Auth
    login(): void {
      if (this.form.valid) {
          // console.log(this.form.value);
          this.fbAuth.SignIn(this.form.value.email, this.form.value.password);
          // this.router.navigateByUrl('/home');
          return;
      }
    }
  }
