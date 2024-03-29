import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { SocialMediaButtonsComponent } from './social-media-buttons.component';

@NgModule({
    declarations: [SocialMediaButtonsComponent],
    imports: [CommonModule, MatIconModule, MatRippleModule],
    exports: [SocialMediaButtonsComponent],
})
export class SocialMediaButtonsModule {}
