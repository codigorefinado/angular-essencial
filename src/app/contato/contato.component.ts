import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContatoComponentService } from './contato.component.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: [ './contato.component.css' ]
})
export class ContatoComponent implements OnInit {

  constructor(private contatoComponentService: ContatoComponentService) {
  }

  ngOnInit() {

  }

  enviarContato(contatoForm: NgForm) {
    console.log('contatoForm:', contatoForm.value);

    this.contatoComponentService.enviarContato(contatoForm.value).subscribe((response) => {
      console.log('Response', response);
      console.log('fim!');
    });


  }

}
