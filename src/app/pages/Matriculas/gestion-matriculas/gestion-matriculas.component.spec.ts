import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatriculasComponent } from './gestion-matriculas.component';

describe('GestionMatriculasComponent', () => {
  let component: GestionMatriculasComponent;
  let fixture: ComponentFixture<GestionMatriculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMatriculasComponent]
    });
    fixture = TestBed.createComponent(GestionMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
