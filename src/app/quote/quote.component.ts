import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  userQuotes = [
    new Quote(1, 'Dont cry because its over, smile because it happened.', '-	Dr. Seuss', 0, 0, new Date(2019,7,10)),
    new Quote(2, 'Start where you are. Use what you have. Do what you can.', '-	Arthur Ashe', 0, 0, new Date(2019,7,10)),
    new Quote(3, 'A room without books is like a body without a soul.', '- Marcus Tullius Cicero', 0, 0, new Date(2019,7,10)),
    new Quote(4, 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.', '-	Albert Einstein', 0, 0, new Date(2018,7,10)),
    new Quote(5, 'So many books, so little time.', '- Frank Zappa', 0, 0, new Date(2019,7,10))
  ]

  constructor() { }

  ngOnInit() {
  }

}
