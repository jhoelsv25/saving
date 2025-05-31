import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-check-payment',
    imports: [FormsModule, RouterLink],
    templateUrl: './check-payment.component.html',
    styles: [
        `
            @keyframes fade-in {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fade-in {
                animation: fade-in 0.6s ease-out;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckPaymentComponent {
    dni: string = '';
    resultado: string = '';

    verificarPago() {
        // Simula una verificación de pago
        if (this.dni === '12345678') {
            this.resultado = '✅ El pago ya fue realizado.';
        } else if (this.dni.length === 8) {
            this.resultado = '❌ No se encontró un pago registrado.';
        } else {
            this.resultado = '⚠️ DNI inválido.';
        }
    }

    login() {
        // Redirigir a login (puedes cambiarlo)
        alert('Redirigiendo al login...');
    }
}
