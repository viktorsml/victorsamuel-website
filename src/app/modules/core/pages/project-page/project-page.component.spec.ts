import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { ProjectPageComponent } from './project-page.component';
import { ProjectPageRoutingModule } from './project-page.routing';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPageComponent],
      imports: [ProjectPageRoutingModule, PageTitleModule, SmartPictureModule, MatButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
