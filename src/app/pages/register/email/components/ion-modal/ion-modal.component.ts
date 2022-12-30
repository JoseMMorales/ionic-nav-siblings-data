import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IonModal } from '@ionic/angular';

import { FormObj } from '../../models/formData.interface';

@Component({
  selector: 'app-ion-modal',
  template: `<ion-modal trigger="open-modal" [isOpen]="isModalOpen">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button (click)="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome to Ionic Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="confirm()" [strong]="true">
              Confirm
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <ion-list *ngFor="let item of formObj | keyvalue">
          <ion-item>
            <ion-icon
              size="large"
              name="accessibility-outline"
              slot="start"
            ></ion-icon>
            <p>
              <b>{{ item.key | uppercase }}:</b> {{ item.value }}
            </p>
          </ion-item>
        </ion-list>
      </ion-content>
    </ng-template>
  </ion-modal>`,
})
export class IonModalComponent {
  @Input() isModalOpen: boolean = false;
  @Input() formObj!: FormObj;
  @Output()
  modelBooleanEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(IonModal) modal!: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.modelBooleanEvent.emit(false);
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
    this.modelBooleanEvent.emit(false);
  }
}
