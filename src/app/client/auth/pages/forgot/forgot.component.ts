import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-forgot',
    imports: [RouterLink],
    templateUrl: './forgot.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ForgotComponent {}
