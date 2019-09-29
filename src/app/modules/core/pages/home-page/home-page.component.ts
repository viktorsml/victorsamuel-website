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
    // const tiltedElements = document.querySelectorAll('.titlme .picture-holder');
    // tiltedElements.forEach(e => {
    //   e.setAttribute('data-tilt', '');
    //   e.setAttribute('data-tilt-full-page-listening', '');
    // })
    // this.vanillaTilt.init(tiltedElements, { max: 1, speed: 400 });
  }

  

}
