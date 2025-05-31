import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
    transform(value: string): string {
        try {
            // Extrae la hora, los minutos y los segundos de la cadena de tiempo
            const [time, offset] = value.split('+');
            const [hours, minutes] = time.split(':').map(Number);

            // Convierte horas a formato 12 horas
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const adjustedHours = hours % 12 || 12; // La hora '0' debe ser '12'

            // Formatea los minutos para que siempre tengan dos dígitos
            const minutesStr = minutes < 10 ? '0' + minutes : minutes;

            // Retorna la cadena formateada
            return `${adjustedHours}:${minutesStr} ${ampm}`;
        } catch (error) {
            return value;
        }
    }
}
