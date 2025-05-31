export const convertToDateTimeLocal = (isoString: Date): string => {
    const date = new Date(isoString); // Convierte la cadena ISO 8601 a un objeto Date.
    const offset = date.getTimezoneOffset() * 60000; // Obtiene la diferencia de zona horaria en milisegundos.
    const localDate = new Date(date.getTime() - offset); // Ajusta la hora a la zona local.
    return localDate.toISOString().slice(0, 16); // Devuelve el formato 'YYYY-MM-DDTHH:MM'.
};
