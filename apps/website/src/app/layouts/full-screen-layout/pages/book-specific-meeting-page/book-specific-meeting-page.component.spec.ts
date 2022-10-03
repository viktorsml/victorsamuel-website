import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSpecificMeetingPageComponent } from './book-specific-meeting-page.component';

describe('BookSpecificMeetingPageComponent', () => {
  let component: BookSpecificMeetingPageComponent;
  let fixture: ComponentFixture<BookSpecificMeetingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSpecificMeetingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSpecificMeetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
