import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FullScreenLayoutComponent } from './full-screen-layout.component';
import { FullScreenLayoutRoutingModule } from './full-screen-layout.routing';

@NgModule({
    declarations: [FullScreenLayoutComponent],
    imports: [CommonModule, FullScreenLayoutRoutingModule],
    exports: [FullScreenLayoutComponent],
})
export class FullScreenLayoutModule {}
