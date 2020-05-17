import { Subscription } from 'rxjs';

import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../app.state';
import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';
import * as LoadingScreenActions from '../../../../state/actions/loading-screen.actions';
import { CoreService } from '../../core.service';
import { Project } from './project-page.interfaces';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit, OnDestroy {
  public project: Project;
  public headerImage: SmartPictureSettings;
  public gallery: SmartPictureSettings[];
  private storedProject: Subscription;
  private routeSub: Subscription;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private readonly store: Store<AppState>,
    private readonly angularFirestore: AngularFirestore,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly core: CoreService
  ) {}

  public ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const doc = this.angularFirestore.collection(this.resolveCollection()).doc<Project>(params['projectId']);
      this.storedProject = doc.valueChanges().subscribe(
        (project) => this.renderProject(project),
        (error) => console.error(error)
      );
    });
  }

  public resolveCollection(): string {
    return this.locale.substr(0, 2) === 'es' ? 'es_projects' : 'projects';
  }

  private renderProject(project: Project): void {
    if (!project) {
      this.router.navigateByUrl('/not-found', { skipLocationChange: true });
      return;
    }
    this.core.setMetaTags({
      title: { en: `${project.title} | Victor Samuel`, es: `${project.title} | Victor Samuel` },
      description: { en: project.description, es: project.description },
      type: 'profile',
      image: this.core.profilePic,
      url: `https://www.victorsamuel.com/${this.core.currentLocale}${this.router.url}`,
    });
    this.headerImage = {
      size: 'cover',
      isResponsive: true,
      widthRatio: 16,
      heightRatio: 7,
      ...project.headerImage,
    };
    this.project = project;
    this.store.dispatch(new LoadingScreenActions.ShowLoadingScreen(false));
  }

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.storedProject.unsubscribe();
  }
}
