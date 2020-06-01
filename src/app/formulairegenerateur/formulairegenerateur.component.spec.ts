import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairegenerateurComponent } from './formulairegenerateur.component';

describe('FormulairegenerateurComponent', () => {
  let component: FormulairegenerateurComponent;
  let fixture: ComponentFixture<FormulairegenerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairegenerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairegenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
