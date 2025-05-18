import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'notification';

export type ToastPosition =
    | 'top-right'
    | 'bottom-right'
    | 'top-left'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';

export interface Toast {
    message: string;
    type: ToastType;
    id: number;
    position?: ToastPosition;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts = signal<Toast[]>([]);

    showToast(
        message: string,
        type: ToastType = 'info',
        duration: number = 5000,
        position: ToastPosition = 'bottom-right', // Ahora la posición por defecto es 'bottom-right'
    ): number {
        const id = Date.now(); // ID único basado en timestamp
        this.toasts.set([...this.toasts(), { message, type, id, position }]);

        // Solo configurar timeout si duration > 0
        if (duration > 0) {
            setTimeout(() => this.removeToast(id), duration);
        }

        return id; // Retornar el ID para control manual
    }

    removeToast(id: number) {
        this.toasts.set(this.toasts().filter(t => t.id !== id));
    }
}
