import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SpinnerModule } from '../../shared/components/spinner/spinner.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderModule } from './components/header/header.module';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';

@NgModule({
  declarations: [CoreComponent, FooterComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, HeaderModule, CoreRoutingModule, SpinnerModule]
})
export class CoreModule {}
