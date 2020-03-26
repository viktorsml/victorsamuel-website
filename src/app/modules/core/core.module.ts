import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerModule } from '../../shared/components/spinner/spinner.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderModule } from './components/header/header.module';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';

@NgModule({
  declarations: [CoreComponent, FooterComponent],
  imports: [CommonModule, HeaderModule, CoreRoutingModule, SpinnerModule]
})
export class CoreModule {}
