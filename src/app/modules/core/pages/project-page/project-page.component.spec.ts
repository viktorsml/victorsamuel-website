import { BehaviorSubject, of } from 'rxjs';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { ProjectPageComponent } from './project-page.component';
import { fakeProject } from './projects';

const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject(fakeProject)
    })
  })
};

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ projectId: 'test-id' }) } },
        { provide: AngularFirestore, useValue: FirestoreStub }
      ],
      imports: [RouterTestingModule, SpinnerModule, PageTitleModule, SmartPictureModule, MatButtonModule]
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
