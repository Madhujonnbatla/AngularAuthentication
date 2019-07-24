import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerstableComponent } from './engineerstable.component';

describe('EngineerstableComponent', () => {
  let component: EngineerstableComponent;
  let fixture: ComponentFixture<EngineerstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
