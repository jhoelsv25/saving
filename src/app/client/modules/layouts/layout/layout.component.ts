import { NgClass } from '@angular/common';
import { HttpHeaderResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { slideInLeftAnimation } from '@shared/utils/animation';

@Component({
    selector: 'app-layout',
    imports: [NgClass, HeaderComponent, SideNavComponent, RouterOutlet],
    templateUrl: './layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [slideInLeftAnimation('openClose', '300px')],
})
export default class LayoutComponent {
    public sidebarOpen = signal<boolean>(false);

    public toggleSidebar() {
        this.sidebarOpen.update(prev => !prev);
    }
}
