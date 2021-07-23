import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectPageComponent } from './single-project-page.component';

describe('SingleProjectPageComponent', () => {
  let component: SingleProjectPageComponent;
  let fixture: ComponentFixture<SingleProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
