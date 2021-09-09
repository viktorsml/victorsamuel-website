import { LanguageServiceService } from 'src/app/shared/services/language-service.service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LanguageSwitcherComponent } from './language-switcher.component';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, MatTooltipModule],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
