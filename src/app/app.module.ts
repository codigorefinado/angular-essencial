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
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    InicioModule,
    GiphyModule,
    ContatoModule,
    SharedModuleModule,
    ClienteModule,

    PageNotFoundModule
  ],
  providers: [ GiphyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
