import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
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
    private readonly angularFirestore: AngularFirestore,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const doc = this.angularFirestore.collection('projects').doc<Project>(params['projectId']);
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

  public ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.storedProject.unsubscribe();
  }

  // private itemDoc: AngularFirestoreDocument<Item>;
  // item: Observable<Item>;

  // constructor(private afs: AngularFirestore) {
  //   this.itemDoc = afs.doc<Item>('items/1');
  //   this.item = this.itemDoc.valueChanges();
  // }
  // update(item: Item) {
  //   this.itemDoc.update(item);
  // }
}
