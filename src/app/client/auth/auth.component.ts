import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-auth',
    imports: [RouterOutlet],
    templateUrl: './auth.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthComponent {}
