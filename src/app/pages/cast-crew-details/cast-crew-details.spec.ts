import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCrewDetails } from './cast-crew-details';

describe('CastCrewDetails', () => {
  let component: CastCrewDetails;
  let fixture: ComponentFixture<CastCrewDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastCrewDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastCrewDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
