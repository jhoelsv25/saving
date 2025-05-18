import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ToastPosition, ToastService } from '@core/services/toast.service';

@Component({
    selector: 'app-toast',
    imports: [NgClass],
    templateUrl: './toast.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('toastAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px) scale(0.95)' }),
                animate(
                    '300ms ease-out',
                    style({ opacity: 1, transform: 'translateY(0) scale(1)' }),
                ),
            ]),
            transition(':leave', [
                animate(
                    '300ms ease-in',
                    style({ opacity: 0, transform: 'translateY(10px) scale(0.95)' }),
                ),
            ]),
        ]),
    ],
})
export class ToastComponent {
    private toastService = inject(ToastService);
    public toasts = computed(() => this.toastService.toasts());

    removeToast(id: number) {
        this.toastService.removeToast(id);
    }
}
