import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-members',
    imports: [],
    templateUrl: './members.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MembersComponent {}
