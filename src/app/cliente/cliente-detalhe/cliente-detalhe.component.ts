import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cliente-detalhe',
  templateUrl: 'cliente-detalhe.component.html',
  styleUrls: [ 'cliente-detalhe.component.css' ]
})
export class ClienteDetalheComponent implements OnInit {
  idAtual;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((objeto: any) => {
      this.idAtual = objeto.id;

      //sintaxe objeto['id'] comum no JavaScript
      this.idAtual = +objeto['id']; // simbolo de + converte string em número
      //fazer pesquisa dos detalhes da pessoa
    })
  }

}
