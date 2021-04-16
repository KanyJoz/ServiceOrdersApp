import { FormControl, FormGroup, Validators } from '@angular/forms';

export function getChangeForm(): FormGroup {
    return new FormGroup({
        password: new FormControl('', [Validators.minLength(6), Validators.required]),
        newPassword: new FormControl('', [Validators.minLength(6), Validators.required])
    });
}
