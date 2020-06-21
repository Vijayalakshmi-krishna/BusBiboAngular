import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbusesComponent } from './listbuses.component';

describe('ListbusesComponent', () => {
  let component: ListbusesComponent;
  let fixture: ComponentFixture<ListbusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
