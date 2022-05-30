import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoMoradoresComponent } from './retorno-moradores.component';

describe('RetornoMoradoresComponent', () => {
  let component: RetornoMoradoresComponent;
  let fixture: ComponentFixture<RetornoMoradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornoMoradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoMoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
