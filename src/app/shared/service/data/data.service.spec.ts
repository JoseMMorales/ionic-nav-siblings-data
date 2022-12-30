import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DataService);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
