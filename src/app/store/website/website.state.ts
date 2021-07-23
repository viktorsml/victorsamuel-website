import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateKey } from '@store/models';
import { WebsiteEffects } from '@store/website/website.effects';

import { websiteStateReducer } from './website.reducers';

@NgModule({
  imports: [EffectsModule.forFeature([WebsiteEffects]), StoreModule.forFeature('website', websiteStateReducer)],
})
export class WebsiteStateModule {}
