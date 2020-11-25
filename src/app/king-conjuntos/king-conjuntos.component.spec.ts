import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingConjuntosComponent } from './king-conjuntos.component';

describe('KingConjuntosComponent', () => {
  let component: KingConjuntosComponent;
  let fixture: ComponentFixture<KingConjuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingConjuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
