import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOperatorComponent } from './bus-operator.component';

describe('BusOperatorComponent', () => {
  let component: BusOperatorComponent;
  let fixture: ComponentFixture<BusOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
