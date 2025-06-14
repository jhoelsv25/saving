import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './core/services/toast.service';
import { ToastComponent } from '@components/toast/toast.component';
import { ThemeService } from '@core/services/theme.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToastComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    private toastService = inject(ToastService);
    private themeService = inject(ThemeService);
    title = 'saving-01';

    ngOnInit(): void {
        this.themeService.applyDarkMode();
    }
}
