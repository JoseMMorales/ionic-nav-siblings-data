import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonNavLinkComponent } from './components/ion-nav-link/ion-nav-link.component';
import { DataService } from './service/data/data.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [IonNavLinkComponent],
  exports: [
    CommonModule,
    FormsModule,
    IonNavLinkComponent,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
