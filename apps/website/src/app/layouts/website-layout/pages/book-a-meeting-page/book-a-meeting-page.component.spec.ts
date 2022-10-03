import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAMeetingPageComponent } from './book-a-meeting-page.component';

describe('BookAMeetingPageComponent', () => {
    let component: BookAMeetingPageComponent;
    let fixture: ComponentFixture<BookAMeetingPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BookAMeetingPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BookAMeetingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
