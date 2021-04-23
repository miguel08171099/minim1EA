import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSedesComponent } from './listado-sedes.component';

describe('ListadoSedesComponent', () => {
  let component: ListadoSedesComponent;
  let fixture: ComponentFixture<ListadoSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
