import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGroupByAlphabetesComponent } from './ngx-group-by-alphabetes.component';

describe('NgxGroupByAlphabetesComponent', () => {
  let component: NgxGroupByAlphabetesComponent;
  let fixture: ComponentFixture<NgxGroupByAlphabetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGroupByAlphabetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGroupByAlphabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
