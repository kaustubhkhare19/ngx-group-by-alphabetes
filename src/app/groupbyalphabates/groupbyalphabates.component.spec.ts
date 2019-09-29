import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbyalphabatesComponent } from './groupbyalphabates.component';

describe('GroupbyalphabatesComponent', () => {
  let component: GroupbyalphabatesComponent;
  let fixture: ComponentFixture<GroupbyalphabatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupbyalphabatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupbyalphabatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
