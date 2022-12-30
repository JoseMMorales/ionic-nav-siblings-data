import { Component, Input, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ion-nav-link',
  template: `<div [ngClass]="{ 'no-pointer-event': form.invalid }">
    <ion-nav-link router-direction="forward" [component]="component">
      <ion-button
        expand="block"
        [disabled]="form.invalid"
        type="submit"
        class="submit"
      >
        {{ buttonText }}
      </ion-button>
    </ion-nav-link>
  </div>`,
  styleUrls: ['./ion-nav-link.component.scss'],
})
export class IonNavLinkComponent {
  @Input() form!: FormGroup;
  @Input() component!: Type<any>;
  @Input() buttonText: string = '';

  constructor() {}
}
