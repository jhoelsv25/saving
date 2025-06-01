import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
@Component({
    selector: 'app-header',
    imports: [NgClass],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    //private authStore = inject(AuthStore);
    public currentUser = computed(() => ({
        name: 'John Doe', // Replace with actual user data
        avatar: 'https://example.com/avatar.jpg', // Replace with actual avatar URL
        email: 'example@gmail.com',
        role: 'Admin', // Replace with actual user role
    }));
    private themeService = inject(ThemeService);
    public toggleSidebar = output<void>();
    public sidebarOpen = input.required<boolean>();
    public isDarkMode = computed(() => this.themeService.isDarkTheme());
    notifications: string[] = ['Notificación 1', 'Notificación 2', 'Notificación 3'];
    userName: string = 'John Doe';
    ngOnInit(): void {
        //if (!this.currentUser()) return;
        // this.userAttachmentStore.loadByUser(this.currentUser()!.id);
    }

    toggleDarkMode() {
        this.themeService.toggleTheme();
    }

    logout() {
        //this.authStore.logout();
    }
}
