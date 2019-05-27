import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  userQuotes = [
    new Quote(1, 'Quote number 1', 'kay', 0, 0, new Date(2019,7,10)),
    new Quote(2, 'Quote number 2', 'kay', 0, 0, new Date(2019,7,10)),
    new Quote(3, 'Quote number 3', 'kay', 0, 0, new Date(2019,7,10)),
    new Quote(4, 'Quote number 4', 'kay', 0, 0, new Date(2019,7,10)),
    new Quote(5, 'Quote number 5', 'kay', 0, 0, new Date(2019,7,10))
  ]

  constructor() { }

  ngOnInit() {
  }

}
