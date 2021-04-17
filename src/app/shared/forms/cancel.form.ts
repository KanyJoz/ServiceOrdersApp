import { FormControl, FormGroup, Validators } from '@angular/forms';

export function getCancelForm(): FormGroup {
    return new FormGroup({
        reason: new FormControl('', [Validators.required])
    });
}
