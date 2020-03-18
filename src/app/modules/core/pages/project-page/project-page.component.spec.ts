import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageComponent } from './project-page.component';
import { ProjectPageRoutingModule } from './project-page.routing';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { SmartPictureModule } from 'src/app/shared/components/smart-picture/smart-picture.module';
import { MatButtonModule } from '@angular/material/button';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPageComponent],
      imports: [
        ProjectPageRoutingModule,
        PageTitleModule,
        SmartPictureModule,
        MatButtonModule
      ]
    })
      .compileComponents();
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
