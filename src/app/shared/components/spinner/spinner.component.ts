import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() isLight: boolean = true;
  @Input() @HostBinding('style.--spinner-size') size: string = '70px';

  constructor() { }

  ngOnInit() { }

}
