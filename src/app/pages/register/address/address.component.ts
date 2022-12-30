import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DataService } from 'src/app/shared/service/data/data.service';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  component = EmailComponent;
  addressForm!: FormGroup;
  textButton: string = 'Go to Email';

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.setFormFields();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submitAddressForm(): void {
    if (!!this.addressForm) {
      this.dataService.setData(this.addressForm.getRawValue());
    }
  }

  private initForm(): void {
    if (!this.addressForm) {
      this.addressForm = this.formBuilder.group({
        name: [{ value: '', disabled: true }, Validators.required],
        surname: [{ value: '', disabled: true }, Validators.required],
        address: ['', Validators.required],
        apartment: ['', Validators.required],
      });
    }
  }

  private setFormFields(): void {
    this.subscription = this.dataService.getData().subscribe((data) => {
      this.addressForm.patchValue({
        name: data.name,
        surname: data.surname,
      });
    });
  }
}
