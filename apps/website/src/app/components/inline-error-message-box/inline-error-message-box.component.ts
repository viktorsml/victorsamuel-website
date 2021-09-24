import { Component, Input, OnInit } from '@angular/core';

import { ErrorMessage, ErrorMessageEnumAsString, errorMessagesMap } from './inline-error-message-box.component.mocks';
import { IErrorMessage } from './inline-error-message-box.component.models';

@Component({
  selector: 'app-inline-error-message-box',
  templateUrl: './inline-error-message-box.component.html',
  styleUrls: ['./inline-error-message-box.component.scss'],
})
export class InlineErrorMessageBoxComponent implements OnInit {
  @Input() public 'error-message': ErrorMessageEnumAsString;

  public errorMessage: IErrorMessage | undefined;

  constructor() {}

  public ngOnInit(): void {
    this.errorMessage = errorMessagesMap.get(this['error-message'] as ErrorMessage);
  }
}
