import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() public isLight: boolean = true;
  @Input() @HostBinding('style.--spinner-size') public size: string = '70px';

  constructor() {}
}
