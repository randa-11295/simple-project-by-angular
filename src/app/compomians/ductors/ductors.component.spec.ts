import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctorsComponent } from './ductors.component';

describe('DuctorsComponent', () => {
  let component: DuctorsComponent;
  let fixture: ComponentFixture<DuctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
