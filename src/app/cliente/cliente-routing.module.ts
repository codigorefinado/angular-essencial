import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes-detalhe/:id', component: ClienteDetalheComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class ClienteRoutingModule {
}
