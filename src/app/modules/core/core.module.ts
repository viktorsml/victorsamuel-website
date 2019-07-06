import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [CoreComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule {}
