import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GiphyService } from './giphy/giphy.service';
import { SharedModuleModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { GiphyModule } from './giphy/giphy.module';
import { ContatoModule } from './contato/contato.module';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.modules';
import { InicioModule } from './inicio/inicio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InicioModule,
    GiphyModule,
    ContatoModule,
    SharedModuleModule,
    AppRoutingModule,

    PageNotFoundModule
  ],
  providers: [ GiphyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
