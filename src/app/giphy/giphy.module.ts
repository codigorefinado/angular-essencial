import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GiphyComponent} from "./giphy.component";

@NgModule({
  imports: [CommonModule],
  declarations: [GiphyComponent],
  exports: [GiphyComponent],
  providers: []

})
export class GiphyModule {
}
