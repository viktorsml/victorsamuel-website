import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineErrorMessageBoxComponent } from './inline-error-message-box.component';

describe('InlineErrorMessageBoxComponent', () => {
  let component: InlineErrorMessageBoxComponent;
  let fixture: ComponentFixture<InlineErrorMessageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineErrorMessageBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineErrorMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
