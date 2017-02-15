import { NgModule } from '@angular/core';
import { GiphyComponent } from './giphy.component';
import { GiphyRoutingModule } from './giphy-routing.module';
import { SharedModuleModule } from '../shared/shared.module';

@NgModule({
  imports: [ SharedModuleModule, GiphyRoutingModule ],
  declarations: [ GiphyComponent ],
  exports: [ GiphyComponent ],
  providers: []

})
export class GiphyModule {
}
