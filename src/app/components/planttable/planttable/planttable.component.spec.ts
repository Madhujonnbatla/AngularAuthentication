import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanttableComponent } from './planttable.component';

describe('PlanttableComponent', () => {
  let component: PlanttableComponent;
  let fixture: ComponentFixture<PlanttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
