import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMascotaComponent } from './add-edit-mascota.component';

describe('AddEditMascotaComponent', () => {
  let component: AddEditMascotaComponent;
  let fixture: ComponentFixture<AddEditMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
