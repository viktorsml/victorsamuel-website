import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioPageRoutingModule } from './portfolio-page.routing';

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let fixture: ComponentFixture<PortfolioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioPageComponent],
      imports: [
        RouterModule,
        RouterTestingModule,
        PortfolioPageRoutingModule,
        PageTitleModule,
        SmartPictureModule,
        MatButtonModule,
        MatIconModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
