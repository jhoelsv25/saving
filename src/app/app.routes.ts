import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./client/auth/auth.routes'),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./client/modules/modules.routes'),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];
