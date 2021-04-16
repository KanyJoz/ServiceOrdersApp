import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.minLength(8),
      Validators.required, Validators.pattern('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    passwordAgain: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  error = false;

  constructor(private router: Router) { }

  // TODO: firebase Auth
  registration(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password === this.form.value.passwordAgain) {
        console.log(this.form.value);
        // this.router.navigateByUrl('/login');
        return;
      }
    }
    this.error = true;
  }
}
