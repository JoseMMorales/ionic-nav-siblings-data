import { TestBed } from '@angular/core/testing';

import { EmailComponent } from './email.component';

describe('EmailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmailComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
