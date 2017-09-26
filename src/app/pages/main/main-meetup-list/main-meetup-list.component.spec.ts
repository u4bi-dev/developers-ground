import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetupListComponent } from './main-meetup-list.component';

describe('MainMeetupListComponent', () => {
  let component: MainMeetupListComponent;
  let fixture: ComponentFixture<MainMeetupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMeetupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
