import { Component, OnInit } from '@angular/core';

interface PictureSource {
  webp ? : string,
  bmp ? : string,
  jpg ? : string,
  png ? : string,
  gif ? : string
}

interface ProjectTag {
  id: string,
  displayText: string
}

interface Project {
  projectId: string,
  title: string,
  description: string,
  pictureSource: PictureSource,
  tags: ProjectTag[],
  codeUrl ? : string,
}

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  public projects: Project[];

  constructor() {
    this.projects = [
    ];
  }

  ngOnInit() {}

}
