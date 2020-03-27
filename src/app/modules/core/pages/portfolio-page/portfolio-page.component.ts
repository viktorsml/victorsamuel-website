import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';
import { Project } from '../project-page/project-page.interfaces';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit, OnDestroy {
  public imageSettings = {
    size: 'cover',
    isResponsive: true,
    heightRatio: 6,
    widthRatio: 5
  };
  public projects: Project[];
  private storedProjects: Subscription;

  constructor(private readonly angularFirestore: AngularFirestore) {}

  public ngOnInit(): void {
    const docs = this.angularFirestore.collection<Project>('projects', ref => ref.orderBy('publishDate', 'desc'));
    this.storedProjects = docs.valueChanges({ idField: 'propertyId' }).subscribe(
      projects => {
        if (projects) {
          this.projects = projects;
          console.log(projects);
        }
      },
      error => console.warn(error)
    );
  }

  public bindPicture(image: SmartPictureSettings): SmartPictureSettings {
    return { ...image, ...this.imageSettings };
  }

  public ngOnDestroy(): void {
    this.storedProjects.unsubscribe();
  }
}
