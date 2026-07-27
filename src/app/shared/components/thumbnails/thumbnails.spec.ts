import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Thumbnails } from './thumbnails';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Thumbnails', () => {
  let component: Thumbnails;
  let fixture: ComponentFixture<Thumbnails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thumbnails],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thumbnails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
