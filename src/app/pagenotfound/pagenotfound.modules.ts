import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pagenotfound.component';
import { routing } from './pagenotfound.routes';

@NgModule({
  imports: [ CommonModule, routing ],
  declarations: [ PageNotFoundComponent ],
  exports: [ PageNotFoundComponent ]
})
export class PageNotFoundModule {
}

