import { Subscription } from 'rxjs';

import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

import { SmartPictureSettings } from '../../../../../app/shared/components/smart-picture/smart-picture.interfaces';
import { Project } from './project-page.interfaces';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit, OnDestroy {
  public project: Project;
  public headerImage: SmartPictureSettings;
  public gallery: SmartPictureSettings[];
  private storedProject: Subscription;
  private routeSub: Subscription;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private readonly angularFirestore: AngularFirestore,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    console.log(this.locale);
    this.routeSub = this.route.params.subscribe(params => {
      const doc = this.angularFirestore.collection(this.resolveCollection()).doc<Project>(params['projectId']);
      this.storedProject = doc.valueChanges().subscribe(
        project => {
          if (project) {
            this.project = project;
            this.headerImage = {
              size: 'cover',
              isResponsive: true,
              widthRatio: 16,
              heightRatio: 7,
              ...project.headerImage
            };
          } else {
            this.router.navigateByUrl('/not-found', { skipLocationChange: true });
          }
        },
        error => {
          console.warn(error);
        }
      );
    });
  }

  public resolveCollection(): string {
    return this.locale.substr(0, 2) === 'es' ? 'es_projects' : 'projects';
  }

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.storedProject.unsubscribe();
  }
}
