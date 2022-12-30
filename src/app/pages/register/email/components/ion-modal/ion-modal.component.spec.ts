import { TestBed } from '@angular/core/testing';

import { IonModalComponent } from './ion-modal.component';

describe('IonModalComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IonModalComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IonModalComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
