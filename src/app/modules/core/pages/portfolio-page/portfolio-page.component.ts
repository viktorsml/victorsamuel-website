import { Subscription } from 'rxjs';

import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../app.state';
import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';
import * as LoadingScreenActions from '../../../../state/actions/loading-screen.actions';
import { CoreService } from '../../core.service';
import { Project } from '../project-page/project-page.interfaces';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(40px)', opacity: '0' }),
        animate('.5s 0.5s cubic-bezier(.17,.67,.83,.67)', style({ transform: 'translateY(0)', opacity: '0.4' })),
      ]),
    ]),
  ],
})
export class PortfolioPageComponent implements OnInit, OnDestroy {
  public imageSettings = {
    size: 'cover',
    isResponsive: false,
  };
  public projects: Project[];
  private storedProjects: Subscription;
  public placeholdeImage: SmartPictureSettings = {
    source: {
      main: {
        url: 'https://picsum.photos/seed/somerandomimage/600/600',
        type: 'jpg',
      },
    },
  };

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private readonly store: Store<AppState>,
    private readonly angularFirestore: AngularFirestore,
    private readonly router: Router,
    private readonly core: CoreService,
    private readonly renderer: Renderer2
  ) {
    store.dispatch(new LoadingScreenActions.ShowLoadingScreen(false));
  }

  public ngOnInit(): void {
    this.core.setMetaTags({
      title: {
        en: 'Victor Samuel | Projects',
        es: 'Victor Samuel | Proyectos',
      },
      description: {
        en: `Full-stack web developer currently in the ${this.core.currentLocation.city} area.`,
        es: `Desarrollador web full-stack actualmente en el área de ${this.core.currentLocation.city}.`,
      },
      type: 'profile',
      image: this.core.profilePic,
      url: `https://www.victorsamuel.com/${this.core.currentLocale}${this.router.url}`,
    });
    const docs = this.angularFirestore.collection<Project>(this.resolveCollection(), (ref) => ref.orderBy('publishDate', 'desc'));
    this.storedProjects = docs.valueChanges({ idField: 'propertyId' }).subscribe(
      (projects) => this.renderProjects(projects),
      (error) => console.warn(error)
    );
  }

  public bindPicture(image: SmartPictureSettings): SmartPictureSettings {
    return { ...image, ...this.imageSettings };
  }

  public resolveCollection(): string {
    return this.locale.substr(0, 2) === 'es' ? 'es_projects' : 'projects';
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }

  private renderProjects(projects: Project[]): void {
    if (projects) {
      this.projects = projects;
    }
  }

  public ngOnDestroy(): void {
    this.storedProjects.unsubscribe();
  }
}
