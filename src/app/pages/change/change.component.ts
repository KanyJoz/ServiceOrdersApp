import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getChangeForm } from 'src/app/shared/forms/change.form';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent {
  form: FormGroup = getChangeForm();

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
    changePassword(): void {
      if (this.form.valid) {
          console.log(this.form.value);
          // this.router.navigateByUrl('/home');
          return;
      }
    }
}
