import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoFuncionariosComponent } from './retorno-funcionarios.component';

describe('RetornoFuncionariosComponent', () => {
  let component: RetornoFuncionariosComponent;
  let fixture: ComponentFixture<RetornoFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornoFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
