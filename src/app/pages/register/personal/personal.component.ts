import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from 'src/app/shared/service/data/data.service';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
  component = AddressComponent;
  personalForm!: FormGroup;
  textButton: string = 'Go to Address';

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  submitPersonalForm(): void {
    if (!!this.personalForm) {
      this.dataService.setData(this.personalForm.value);
    }
  }

  private initForm(): void {
    if (!this.personalForm) {
      this.personalForm = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
      });
    }
  }
}
