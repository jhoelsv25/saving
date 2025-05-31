import { effect, inject, Injectable, signal } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private storageService = inject(StorageService);
    private themeKey = signal<string>('theme');
    public isDarkTheme = signal<boolean>(false);
    constructor() {
        effect(() => {
            this.storageService.set('theme', JSON.stringify(this.isDarkTheme()));
            this.applyDarkMode();
        });

        this.isDarkTheme.set(this.storageService.get<boolean>('theme') || false);
    }

    setTheme(theme: string) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    toggleTheme() {
        this.isDarkTheme.update(prev => !prev);
    }

    applyDarkMode() {
        if (this.isDarkTheme()) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }
}
