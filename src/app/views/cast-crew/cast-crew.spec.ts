import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCrew } from './cast-crew';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CastCrew', () => {
  let component: CastCrew;
  let fixture: ComponentFixture<CastCrew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastCrew],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastCrew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
