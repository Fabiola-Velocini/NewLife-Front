import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoVisitantesComponent } from './retorno-visitantes.component';

describe('RetornoVisitantesComponent', () => {
  let component: RetornoVisitantesComponent;
  let fixture: ComponentFixture<RetornoVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornoVisitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
