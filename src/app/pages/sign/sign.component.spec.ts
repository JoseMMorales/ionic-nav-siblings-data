import { TestBed } from '@angular/core/testing';

import { SignComponent } from './sign.component';

describe('SignComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SignComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
