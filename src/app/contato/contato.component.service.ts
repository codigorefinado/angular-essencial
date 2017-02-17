import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers, RequestMethod, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContatoComponentService {

  constructor(private http: Http) {
  }

  get(): Observable<Response> {
    let nomeCompleto = "Clayton";
    let email = "algo@gmail.com";
    let mensagem = "Olá Brasil!";

    let host = 'http://dbapi.io/db/coll';
    let url: string = host;
    return this.http.post(url, {email: 'xiru@whitehouse.com' ,from: 'clayton', message: 'MongoDB rocks as well  in Brazil!'});
  }

  //http://dbapi.io/browser/#/db/coll
  //http://dbapi.io/db/coll
  //http://dbapi.io/db/coll
  //https://sheetsu.com/apis/v1.0/e25f621ac0bd
}