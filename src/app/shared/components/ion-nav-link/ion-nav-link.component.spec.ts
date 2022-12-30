import { TestBed } from '@angular/core/testing';

import { IonNavLinkComponent } from './ion-nav-link.component';

describe('IonNavLinkComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IonNavLinkComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IonNavLinkComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
