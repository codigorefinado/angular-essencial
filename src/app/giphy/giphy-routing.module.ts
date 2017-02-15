import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GiphyComponent } from './giphy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'giphy', component: GiphyComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class GiphyRoutingModule {
}
