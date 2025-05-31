import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./auth.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/check-payment/check-payment.component'),
            },
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component'),
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('./pages/forgot/forgot.component'),
            },
        ],
    },
] as Routes;
