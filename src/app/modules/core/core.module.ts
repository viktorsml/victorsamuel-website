import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';
import { HeaderModule } from './components/header/header.module';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [
    CoreComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CoreRoutingModule,
    SpinnerModule
  ]
})
export class CoreModule { }
