import { state, style, transition, trigger, animate } from '@angular/animations';

export const dowUpAnimation = (name: string) => {
    return trigger(name, [
        state('false', style({ height: '0', overflow: 'hidden' })),
        state('true', style({ height: '*', overflow: 'hidden' })),
        transition('false <=> true', animate('300ms ease-in-out')),
    ]);
};

//anmacion de deracha a izquierda
export const slideInLeftAnimation = (name: string, wd: string) => {
    return trigger(name, [
        state('true', style({ width: '0' })),
        state('false', style({ width: wd || '*' })),
        transition('false <=> true', animate('300ms ease-in-out')),
    ]);
};
