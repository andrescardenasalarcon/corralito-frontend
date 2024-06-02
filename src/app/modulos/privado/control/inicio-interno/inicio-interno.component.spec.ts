import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInternoComponent } from './inicio-interno.component';

describe('InicioInternoComponent', () => {
  let component: InicioInternoComponent;
  let fixture: ComponentFixture<InicioInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioInternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
