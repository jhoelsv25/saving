import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
    private loading = signal(false);
    private message = signal('Cargando...');

    isLoading = () => this.loading.asReadonly();
    getMessage = () => this.message.asReadonly();

    start(message: string = 'Cargando...') {
        this.loading.set(true);
        this.message.set(message);
    }
    stop() {
        this.loading.set(false);
        this.message.set('Cargando...');
    }
    setMessage(message: string) {
        this.message.set(message);
    }
    clearMessage() {
        this.message.set('Cargando...');
    }
}
