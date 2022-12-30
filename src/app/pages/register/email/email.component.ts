import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  fullForm!: FormGroup;

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

  submitFullForm(): void {
    console.log(this.fullForm.getRawValue());
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
    this.subscription = this.dataService.getData().subscribe((data) => {
      this.fullForm.patchValue({
        name: data.name,
        surname: data.surname,
        address: data.address,
        apartment: data.apartment,
      });
    });
  }
}
