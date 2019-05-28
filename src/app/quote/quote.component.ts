import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  userQuotes = [
    new Quote(1, 'Dont cry because its over, smile because it happened.', '-	Dr. Seuss', 0, 0, new Date(2019,7,10),"kay"),
    new Quote(2, 'Start where you are. Use what you have. Do what you can.', '-	Arthur Ashe', 0, 0, new Date(2019,7,10),"kay"),
    new Quote(3, 'A room without books is like a body without a soul.', '- Marcus Tullius Cicero', 0, 0, new Date(2019,1,23),"kay"),
    new Quote(4, 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.', '-	Albert Einstein', 0, 0, new Date(2018,7,10),"kay"),
    new Quote(5, 'So many books, so little time.', '- Frank Zappa', 0, 0, new Date(2019,7,10),"kay")
  ]
  
  toogleDetails(index){
    this.userQuotes[index].showMeta = !this.userQuotes[index].showMeta
  }

  quoteDelete(isDeleted,index){
    if (isDeleted){
        this.userQuotes.splice(index,1);
        }
               
        }

        addNewQuote(quote){
          let quotesLength = this.userQuotes.length;
          quote.quoteID=quotesLength+1;
          quote.dateAdded = new Date(quote.completeDate)
          this.userQuotes.push(quote)
      
        }
      

        
  
  constructor() { }

  ngOnInit() {
  }

}
