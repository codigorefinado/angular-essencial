import { NgModule } from '@angular/core';
import { SharedModuleModule } from '../shared/shared.module';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
    imports: [
        SharedModuleModule, ContatoRoutingModule
    ],
    declarations: [ ContatoComponent ]
})
export class ContatoModule {
}
