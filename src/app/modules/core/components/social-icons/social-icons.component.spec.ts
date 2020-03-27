import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

import { SocialIconsComponent } from './social-icons.component';

describe('SocialIconsComponent', () => {
  let component: SocialIconsComponent;
  let fixture: ComponentFixture<SocialIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialIconsComponent],
      imports: [CommonModule, MatIconModule, MatRippleModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 4 icons in template', () => {
    const iconsInTemplate = fixture.debugElement.queryAllNodes(By.css('a'));
    expect(iconsInTemplate.length).toBe(4);
  });
});
