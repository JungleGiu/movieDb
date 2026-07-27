import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Series } from './series';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Series', () => {
  let component: Series;
  let fixture: ComponentFixture<Series>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Series],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Series);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
