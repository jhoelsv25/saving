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
    private addToast(toast: Toast) {
        this.toasts.update(currentToasts => [...currentToasts, toast]);
        setTimeout(() => {
            this.removeToast(toast.id);
        }, 5000); // Remove toast after 5 seconds
    }

    success(message: string, position: ToastPosition = 'top-right') {
        this.addToast({
            message,
            type: 'success',
            id: Date.now(),
            position,
        });
    }
    error(message: string, position: ToastPosition = 'top-right') {
        this.addToast({
            message,
            type: 'error',
            id: Date.now(),
            position,
        });
    }
    info(message: string, position: ToastPosition = 'top-right') {
        this.addToast({
            message,
            type: 'info',
            id: Date.now(),
            position,
        });
    }
    warning(message: string, position: ToastPosition = 'top-right') {
        this.addToast({
            message,
            type: 'warning',
            id: Date.now(),
            position,
        });
    }
    notification(message: string, position: ToastPosition = 'top-right') {
        this.addToast({
            message,
            type: 'notification',
            id: Date.now(),
            position,
        });
    }

    removeToast(id: number) {
        this.toasts.set(this.toasts().filter(t => t.id !== id));
    }
}
