import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PersonalComponent } from './pages/register/personal/personal.component';
import { AddressComponent } from './pages/register/address/address.component';
import { EmailComponent } from './pages/register/email/email.component';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot({}),
    SharedModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    PersonalComponent,
    AddressComponent,
    EmailComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
