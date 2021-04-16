import { FormControl, FormGroup, Validators } from '@angular/forms';

export function getCreateForm(): FormGroup {
    return new FormGroup({
        category: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        state: new FormControl('', [Validators.required]),
        priority: new FormControl('', [Validators.required])
      });
}
