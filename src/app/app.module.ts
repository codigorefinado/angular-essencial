import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {GiphyComponent} from "./giphy/giphy.component";
import {GiphyService} from "./giphy/giphy.service";
import {SharedModuleModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
