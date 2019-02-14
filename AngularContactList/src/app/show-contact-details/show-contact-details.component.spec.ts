import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactDetailsComponent } from './show-contact-details.component';

describe('ShowContactDetailsComponent', () => {
  let component: ShowContactDetailsComponent;
  let fixture: ComponentFixture<ShowContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
