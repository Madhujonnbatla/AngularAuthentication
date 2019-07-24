import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinetableComponent } from './machinetable.component';

describe('MachinetableComponent', () => {
  let component: MachinetableComponent;
  let fixture: ComponentFixture<MachinetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
