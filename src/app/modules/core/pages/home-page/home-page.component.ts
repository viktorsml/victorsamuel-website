import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    @Inject('VanillaTilt') public vanillaTilt: any
  ) {}

  ngOnInit() {
    // this.vanillaTilt.init(document.querySelector(".tilt-image"), { max: 25, speed: 400 });
    this.vanillaTilt.init(document.querySelectorAll(".titlme"), {
      max: 4,
      speed: 400
    });
  }

}
