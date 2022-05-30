import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoVeiculosComponent } from './retorno-veiculos.component';

describe('RetornoVeiculosComponent', () => {
  let component: RetornoVeiculosComponent;
  let fixture: ComponentFixture<RetornoVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornoVeiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
