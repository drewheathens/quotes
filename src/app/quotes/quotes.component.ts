import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    // new Quotes( 1, 'do it or die trying', 'zayn', new Date(2019, 1, 11) ),

  ];
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  completeQuotes(isComplete, index) {
    if (isComplete) {
        this.quotes.splice(index, 1);
        }
        }

        addNewQuotes(quote) {
          const quotesLength = this.quotes.length;
          quote.id = quotesLength + 1;
          quote.completeDate = new Date(quote.completeDate);
          this.quotes.push(quote);
        }
        upvote(id) {
          this.quotes[id].upvotes += 1;
        }
        downvote(id) {
          this.quotes[id].downvotes += 1;
        }
   constructor() {}

  ngOnInit() {
  }

}
