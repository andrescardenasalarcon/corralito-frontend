import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolAdminComponent } from './rol-admin.component';

describe('RolAdminComponent', () => {
  let component: RolAdminComponent;
  let fixture: ComponentFixture<RolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
