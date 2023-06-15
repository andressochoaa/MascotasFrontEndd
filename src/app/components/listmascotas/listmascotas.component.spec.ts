import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmascotasComponent } from './listmascotas.component';

describe('ListmascotasComponent', () => {
  let component: ListmascotasComponent;
  let fixture: ComponentFixture<ListmascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
