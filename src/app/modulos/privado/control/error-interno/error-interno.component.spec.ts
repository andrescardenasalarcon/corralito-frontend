import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInternoComponent } from './error-interno.component';

describe('ErrorInternoComponent', () => {
  let component: ErrorInternoComponent;
  let fixture: ComponentFixture<ErrorInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
