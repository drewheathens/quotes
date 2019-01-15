import { Component } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html'
})
export class QuotesComponent {
    polo = [
        new Quotes(1,'never walk alone'),
        new Quotes(2,'work hard, play hard'),

    ]
    constructor() { }

  ngOnInit() {
  }
}
