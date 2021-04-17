import { FormControl, FormGroup, Validators } from '@angular/forms';

export function getLoginForm(): FormGroup {
  return new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });
}
