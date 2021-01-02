import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { PageTitleModule } from '../../components/page-title/page-title.module';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page.routing';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPageComponent],
      imports: [ContactPageRoutingModule, HttpClientModule, PageTitleModule, MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
