import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  template: `<p>checkbox works!</p>`,
  styleUrl: './checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent { }
