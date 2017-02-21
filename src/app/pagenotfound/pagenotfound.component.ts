import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'not-found',
  template: '<P>Página não encontrada </P>  <img src = "http://i.giphy.com/LHZyixOnHwDDy.gif" (click)="voltar()">'
})
export class PageNotFoundComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    console.log('url atual: ', document.location.href);
    console.log('location', location.href);
    // window.open('http://google.com');
  }

  voltar(): void {
    this.location.back();
  }

}
