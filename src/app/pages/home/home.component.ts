import { Component } from '@angular/core';
import { PersonalComponent } from '../register/personal/personal.component';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Register OR Log In</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="center-form">
      <ion-grid>
        <ion-row>
          <ion-col align-self-center>
            <ion-nav-link
              router-direction="forward"
              [component]="componentRegister"
            >
              <ion-button expand="block" color="primary">Register</ion-button>
            </ion-nav-link>
            <span class="divider line one-line">or</span>
            <span class="already">Already a user?</span>
            <ion-nav-link
              router-direction="forward"
              [component]="componentSign"
            >
              <ion-button expand="block" color="danger">Sign In</ion-button>
            </ion-nav-link>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  componentRegister = PersonalComponent;
  componentSign = SignComponent;
}
