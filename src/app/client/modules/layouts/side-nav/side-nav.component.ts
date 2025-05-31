import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { dowUpAnimation } from '@shared/utils/animation';

interface Item {
    title: string;
    isCollapsed: boolean;
    children: Array<{
        icon: string;
        label: string;
        title: string;
        routerLink: string;
        isCollapsed: boolean;
        children: any[];
    }>;
}

@Component({
    selector: 'app-side-nav',
    imports: [RouterLink, RouterLinkActive, NgClass],
    templateUrl: './side-nav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [dowUpAnimation('openClose')],
})
export class SideNavComponent {
    public items = signal<Item[]>([]);

    ngOnInit(): void {
        //se va setear el valor de items para que se muestre en el sidebar de la aplicacion de condominio
        this.items.set([
            {
                title: 'Dashboard',
                isCollapsed: false,
                children: [
                    {
                        icon: 'pi pi-home',
                        label: 'Dashboard',
                        title: 'Dashboard',
                        routerLink: '/dashboard',
                        isCollapsed: false,
                        children: [],
                    },
                ],
            },
            {
                title: 'Gestión de Usuarios',
                isCollapsed: false,
                children: [
                    {
                        icon: 'pi pi-users',
                        label: 'Usuarios',
                        title: 'Usuarios',
                        routerLink: '/users',
                        isCollapsed: false,
                        children: [],
                    },
                    {
                        icon: 'pi pi-user-plus',
                        label: 'Registrar Usuario',
                        title: 'Registrar Usuario',
                        routerLink: '/users/register',
                        isCollapsed: false,
                        children: [],
                    },
                ],
            },
            {
                title: 'Gestión de Ahorro',
                isCollapsed: false,
                children: [
                    {
                        icon: 'pi pi-users',
                        label: 'Participantes',
                        title: 'Participantes',
                        routerLink: '/users',
                        isCollapsed: false,
                        children: [],
                    },
                    {
                        icon: 'pi pi-wallet',
                        label: 'Aportes',
                        title: 'Aportes',
                        routerLink: '/contributions',
                        isCollapsed: false,
                        children: [],
                    },
                    {
                        icon: 'pi pi-refresh',
                        label: 'Ciclos',
                        title: 'Ciclos',
                        routerLink: '/cycles',
                        isCollapsed: false,
                        children: [],
                    },
                ],
            },
            {
                title: 'Reportes',
                isCollapsed: false,
                children: [
                    {
                        icon: 'pi pi-file',
                        label: 'Resumen General',
                        title: 'Resumen',
                        routerLink: '/reports/summary',
                        isCollapsed: false,
                        children: [],
                    },
                    {
                        icon: 'pi pi-chart-line',
                        label: 'Aportes por Participante',
                        title: 'Reportes por Participante',
                        routerLink: '/reports/by-participant',
                        isCollapsed: false,
                        children: [],
                    },
                ],
            },
            {
                title: 'Configuración',
                isCollapsed: false,
                children: [
                    {
                        icon: 'pi pi-cog',
                        label: 'Parámetros Generales',
                        title: 'Configuración',
                        routerLink: '/settings',
                        isCollapsed: false,
                        children: [],
                    },
                ],
            },
            {
                title: 'Soporte y Ayuda',
                isCollapsed: false,
                children: [
                    {
                        icon: 'pi pi-question-circle',
                        label: 'Centro de Ayuda',
                        title: 'Ayuda',
                        routerLink: '/help',
                        isCollapsed: false,
                        children: [],
                    },
                    {
                        icon: 'pi pi-send',
                        label: 'Contacto',
                        title: 'Soporte',
                        routerLink: '/support',
                        isCollapsed: false,
                        children: [],
                    },
                ],
            },
        ]);
    }

    public toggleNav(): void {
        //this._layoutService.toggleMenuNav();
    }
}
