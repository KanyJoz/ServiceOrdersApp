import { FormControl, FormGroup, Validators } from '@angular/forms';

export function getRegForm(): FormGroup {
    return new FormGroup({
        username: new FormControl('', [Validators.minLength(8),
          Validators.required, Validators.pattern('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.minLength(6), Validators.required]),
        passwordAgain: new FormControl('', [Validators.minLength(6), Validators.required]),
      });
}
