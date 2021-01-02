import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page.routing';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPageComponent],
      imports: [NotFoundPageRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
