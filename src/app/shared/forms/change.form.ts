import { FormControl, FormGroup, Validators } from '@angular/forms';

export function getChangeForm(): FormGroup {
    return new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    });
}
