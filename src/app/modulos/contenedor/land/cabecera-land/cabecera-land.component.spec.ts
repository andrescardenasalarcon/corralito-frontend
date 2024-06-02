import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraLandComponent } from './cabecera-land.component';

describe('CabeceraLandComponent', () => {
  let component: CabeceraLandComponent;
  let fixture: ComponentFixture<CabeceraLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
