import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirSedeComponent } from './anadir-sede.component';

describe('AnadirSedeComponent', () => {
  let component: AnadirSedeComponent;
  let fixture: ComponentFixture<AnadirSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
