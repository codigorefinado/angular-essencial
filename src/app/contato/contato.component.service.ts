import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContatoComponentService {

  constructor(private http: Http) {
  }

  enviarContato(contatoForm: any): Observable<Response> {
    let nomeCompleto = contatoForm.nomeCompleto;
    let email = contatoForm.contato.email;
    let mensagem = contatoForm.contato.mensagem;

    let host = 'http://dbapi.io/db/coll';
    let url: string = host;
    return this.http.post(url, {email: email ,from: nomeCompleto, message: mensagem});
  }

  //http://dbapi.io/browser/#/db/coll
  //http://dbapi.io/db/coll
  //https://sheetsu.com/apis/v1.0/e25f621ac0bd
}