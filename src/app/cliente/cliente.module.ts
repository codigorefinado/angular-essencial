import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [ ClienteComponent, ClienteDetalheComponent ]
})
export class ClienteModule {
}
