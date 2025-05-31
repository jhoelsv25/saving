import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./layouts/layout/layout.component'),
        children: [
            {
                path: 'users',
                loadComponent: () => import('./users/pages/users/users.component'),
            },
            {
                path: 'members',
                loadComponent: () => import('./members/pages/members/members.component'),
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'users',
            },
        ],
    },
] as Routes;
