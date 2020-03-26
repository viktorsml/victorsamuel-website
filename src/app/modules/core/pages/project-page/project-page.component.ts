import { Component, OnInit } from '@angular/core';

import { projects } from './projects';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  public project = projects[0];

  constructor() {}

  ngOnInit() {}
}
