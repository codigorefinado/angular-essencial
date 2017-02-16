import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GiphyService } from './giphy/giphy.service';
import { SharedModuleModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { GiphyModule } from './giphy/giphy.module';
import { ContatoModule } from './contato/contato.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GiphyModule,
        ContatoModule,
        SharedModuleModule,
        AppRoutingModule
    ],
    providers: [ GiphyService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
