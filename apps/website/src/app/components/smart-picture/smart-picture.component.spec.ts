import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPictureComponent } from './smart-picture.component';

describe('SmartPictureComponent', () => {
  let component: SmartPictureComponent;
  let fixture: ComponentFixture<SmartPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
