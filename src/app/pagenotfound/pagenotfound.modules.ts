import { NgModule, OnInit, } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { PageNotFoundComponent } from './pagenotfound.component';
import { routing } from './pagenotfound.routes';

@NgModule({
  imports: [ CommonModule, routing ],
  declarations: [ PageNotFoundComponent ],
  exports: [ PageNotFoundComponent ]
})
export class PageNotFoundModule  {

}

