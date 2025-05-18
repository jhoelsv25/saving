import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent { }
