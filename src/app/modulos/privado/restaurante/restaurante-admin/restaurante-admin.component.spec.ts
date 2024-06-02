import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteAdminComponent } from './restaurante-admin.component';

describe('RestauranteAdminComponent', () => {
  let component: RestauranteAdminComponent;
  let fixture: ComponentFixture<RestauranteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
