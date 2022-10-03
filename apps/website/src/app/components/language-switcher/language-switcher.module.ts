import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguageSwitcherComponent } from './language-switcher.component';

@NgModule({
    declarations: [LanguageSwitcherComponent],
    imports: [CommonModule],
    exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
