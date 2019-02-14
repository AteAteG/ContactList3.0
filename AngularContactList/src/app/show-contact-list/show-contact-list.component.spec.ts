import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactListComponent } from './show-contact-list.component';

describe('ShowContactListComponent', () => {
  let component: ShowContactListComponent;
  let fixture: ComponentFixture<ShowContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
