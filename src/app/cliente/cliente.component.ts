import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: [ './cliente.component.css' ]
})
export class ClienteComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  abrirDetalheCliente(id: number) {
    this.router.navigate([ '/clientes-detalhe', id ]);
  }

}
