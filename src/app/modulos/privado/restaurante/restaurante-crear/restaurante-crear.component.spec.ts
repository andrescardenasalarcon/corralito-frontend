import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCrearComponent } from './restaurante-crear.component';

describe('RestauranteCrearComponent', () => {
  let component: RestauranteCrearComponent;
  let fixture: ComponentFixture<RestauranteCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
