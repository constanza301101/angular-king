import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingHomeComponent } from './king-home.component';

describe('KingHomeComponent', () => {
  let component: KingHomeComponent;
  let fixture: ComponentFixture<KingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
