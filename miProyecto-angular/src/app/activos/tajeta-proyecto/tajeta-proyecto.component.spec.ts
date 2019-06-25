import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajetaProyectoComponent } from './tajeta-proyecto.component';

describe('TajetaProyectoComponent', () => {
  let component: TajetaProyectoComponent;
  let fixture: ComponentFixture<TajetaProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajetaProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajetaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
