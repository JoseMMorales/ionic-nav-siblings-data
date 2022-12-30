import { TestBed } from '@angular/core/testing';

import { PersonalComponent } from './personal.component';

describe('PersonalComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonalComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
