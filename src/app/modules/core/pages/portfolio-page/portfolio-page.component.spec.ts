import { BehaviorSubject } from 'rxjs';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { fakeProject } from '../project-page/projects';
import { PortfolioPageComponent } from './portfolio-page.component';

const FirestoreStub = {
  collection: (name: string) => ({
    valueChanges: () => new BehaviorSubject([fakeProject, fakeProject])
  })
};

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let fixture: ComponentFixture<PortfolioPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioPageComponent],
      providers: [{ provide: AngularFirestore, useValue: FirestoreStub }],
      imports: [RouterTestingModule, SpinnerModule, PageTitleModule, SmartPictureModule, MatButtonModule, MatIconModule]
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
