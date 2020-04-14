import { Subscription } from 'rxjs';

import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';

import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';
import { Project } from '../project-page/project-page.interfaces';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent implements OnInit, OnDestroy {
  public imageSettings = {
    size: 'cover',
    isResponsive: true,
    heightRatio: 6,
    widthRatio: 5,
  };
  public projects: Project[];
  private storedProjects: Subscription;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private readonly angularFirestore: AngularFirestore,
    private readonly titleService: Title
  ) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Victor Samuel | Projects');
    const docs = this.angularFirestore.collection<Project>(this.resolveCollection(), (ref) => ref.orderBy('publishDate', 'desc'));
    this.storedProjects = docs.valueChanges({ idField: 'propertyId' }).subscribe(
      (projects) => {
        if (projects) {
          this.projects = projects;
          console.log(projects);
        }
      },
      (error) => console.warn(error)
    );
  }

  public bindPicture(image: SmartPictureSettings): SmartPictureSettings {
    return { ...image, ...this.imageSettings };
  }

  public resolveCollection(): string {
    return this.locale.substr(0, 2) === 'es' ? 'es_projects' : 'projects';
  }

  public ngOnDestroy(): void {
    this.storedProjects.unsubscribe();
  }
}
