import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DoesArrayHaveValuesPipe } from './does-array-have-values.pipe';

@NgModule({
  declarations: [DoesArrayHaveValuesPipe],
  imports: [CommonModule],
  exports: [DoesArrayHaveValuesPipe],
})
export class LogicalPipesModule {}
