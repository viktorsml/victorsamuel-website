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
    this.projects = [];
  }

  ngOnInit() {}

}
