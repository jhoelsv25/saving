import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserStore } from '@services/users/services/store/users.store';
import { ButtonDirective } from '@shared/directives/button.directive';
import { InputTextDirective } from '@shared/directives/input-text.directive';

@Component({
    selector: 'app-user-form',
    imports: [ReactiveFormsModule, ButtonDirective, InputTextDirective],
    templateUrl: './user-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {
    private userStore = inject(UserStore);
    private fb = inject(FormBuilder);
    public userForm: FormGroup;
    public roles = signal([
        { value: 'admin', label: 'Administrador' },
        { value: 'member', label: 'Miembro' },
    ]);

    public onCloseModal = output<void>();
    constructor() {
        this.userForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            document: ['', [Validators.required, Validators.minLength(8)]],
            role: ['member', [Validators.required]],
        });
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            const userData = this.userForm.value;
            this.userStore.create(userData);
            this.onCancel();
        } else {
            this.userForm.markAllAsTouched();
        }
    }

    onCancel() {
        this.userForm.reset();
        this.onCloseModal.emit();
    }
}
