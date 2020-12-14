import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCursosComponent } from './aluno-cursos.component';

describe('AlunoCursosComponent', () => {
  let component: AlunoCursosComponent;
  let fixture: ComponentFixture<AlunoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
