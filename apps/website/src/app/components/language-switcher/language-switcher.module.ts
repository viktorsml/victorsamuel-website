import { TooltipModule } from 'ng2-tooltip-directive';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguageSwitcherComponent } from './language-switcher.component';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, TooltipModule],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
