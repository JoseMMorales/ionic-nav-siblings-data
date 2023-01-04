import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

import { DataService } from 'src/app/shared/service/data/data.service';
import { IonLoaderService } from 'src/app/shared/service/loader/ion-loader.service';
import { FormObj } from './models/formData.interface';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  fullForm!: FormGroup;
  formObj!: FormObj;
  isModalOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private ionLoaderService: IonLoaderService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.setFormFields();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submitFullForm(): void {
    this.formObj = this.fullForm.getRawValue();
    this.isModalOpen$.next(true);
  }

  setModalClose(booleanValue: boolean): void {
    this.isModalOpen$.next(booleanValue);
  }

  private initForm(): void {
    if (!this.fullForm) {
      this.fullForm = this.formBuilder.group({
        name: [{ value: '', disabled: true }, Validators.required],
        surname: [{ value: '', disabled: true }, Validators.required],
        address: [{ value: '', disabled: true }, Validators.required],
        apartment: [{ value: '', disabled: true }, Validators.required],
        email: ['', Validators.required],
        confirmEmail: ['', Validators.required],
      });
    }
  }

  private setFormFields(): void {
    this.subscription = this.dataService.getData().subscribe({
      next: (data) => {
        this.ionLoaderService.presentLoader();
        this.fullForm.patchValue({
          name: data.name,
          surname: data.surname,
          address: data.address,
          apartment: data.apartment,
        });
        this.ionLoaderService.dismissLoader();
      },
      error: (error) => console.log('Error: ' + error),
      complete: () => console.log('Completed!'),
    });
  }
}
