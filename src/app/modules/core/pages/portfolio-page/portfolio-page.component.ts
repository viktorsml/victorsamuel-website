import { Component, OnInit } from '@angular/core';

import { Project } from './portfolio-page.interfaces';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  public projects: Project[];

  constructor() {
    this.projects = [
      {
        projectId: 'hpr-website',
        title: 'Hotel Posada de Roger',
        description: 'Modernización del sitio web del hotel junto con un sistema de reservaciones personalizado',
        pictureSource: {
          source: {
            main: {
              url:
                // tslint:disable-next-line: max-line-length
                'https://firebasestorage.googleapis.com/v0/b/viktorsmlwd.appspot.com/o/project-covers%2FProject-HPR.webp?alt=media&token=caacde7d-fc48-4ca8-9e27-e628e2b3b72f',
              type: 'webp'
            },
            fallback: {
              url:
                // tslint:disable-next-line: max-line-length
                'https://firebasestorage.googleapis.com/v0/b/viktorsmlwd.appspot.com/o/project-covers%2FProject-HPR.jpg?alt=media&token=6b05f25e-55b1-4a5e-a77b-516c7512d9a1',
              type: 'jpg'
            }
          },
          size: 'cover',
          isResponsive: true,
          heightRatio: 6,
          widthRatio: 5
        },
        tags: ['Angular', 'Lumen', 'MySQL']
      },
      {
        projectId: 'personal-website',
        title: 'Portfolio Website',
        description: 'Una aplicación web progresiva minimalista hecha para alojar proyectos e información de contacto',
        pictureSource: {
          source: {
            main: {
              url:
                // tslint:disable-next-line: max-line-length
                'https://firebasestorage.googleapis.com/v0/b/viktorsmlwd.appspot.com/o/project-covers%2FProject-Victor-Samuels.webp?alt=media&token=3b65285d-b99f-4b63-8bb8-dc0f29995afe',
              type: 'webp'
            },
            fallback: {
              url:
                // tslint:disable-next-line: max-line-length
                'https://firebasestorage.googleapis.com/v0/b/viktorsmlwd.appspot.com/o/project-covers%2FProject-Victor-Samuels.jpg?alt=media&token=d36d56e4-11ab-4990-83b5-67b73628d2ed',
              type: 'jpg'
            }
          },
          size: 'cover',
          isResponsive: true,
          heightRatio: 6,
          widthRatio: 5
        },
        codeUrl: 'https://github.com/viktorsml/victorsamuel-website',
        tags: ['Angular', 'Firebase']
      }
    ];
  }

  ngOnInit() {}
}
