import { TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddressComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
