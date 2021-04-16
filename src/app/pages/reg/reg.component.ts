import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getRegForm } from 'src/app/shared/forms/reg.form';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  error = false;

  form: FormGroup = getRegForm();

  constructor(private router: Router) { }

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
  registration(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password === this.form.value.passwordAgain) {
        console.log(this.form.value);
        // this.router.navigateByUrl('/home');
        return;
      }
    }
    this.error = true;
  }
}
