import { Component } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html'
})
export class QuotesComponent {
    polo = [
        new Quotes(1,'Watch Finding Nemo'),
        new Quotes(2,'Buy Cookies'),

    ]
}
