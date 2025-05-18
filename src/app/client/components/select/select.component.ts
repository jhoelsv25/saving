import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  template: `<p>select works!</p>`,
  styleUrl: './select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent { }
