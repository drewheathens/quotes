import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
// import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    // ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    // quote-FormModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
