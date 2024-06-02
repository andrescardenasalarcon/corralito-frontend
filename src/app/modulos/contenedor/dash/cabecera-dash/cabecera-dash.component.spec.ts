import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraDashComponent } from './cabecera-dash.component';

describe('CabeceraDashComponent', () => {
  let component: CabeceraDashComponent;
  let fixture: ComponentFixture<CabeceraDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
