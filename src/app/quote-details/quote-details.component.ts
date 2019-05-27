import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  
  @Input() quote:Quote;
  @Output() isDeleted = new EventEmitter<boolean>();

  quoteDelete(deleted:boolean){
    this.isDeleted.emit(deleted);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
