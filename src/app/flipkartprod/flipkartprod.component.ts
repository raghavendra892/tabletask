import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flipkartprod',
  templateUrl: './flipkartprod.component.html',
  styleUrls: ['./flipkartprod.component.scss']
})
export class FlipkartprodComponent implements OnInit {

  flipkartmsg : string = "fastest growing Ecom website"
  @Output() flipkartprodhand : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onflipststus(){
    this.flipkartprodhand.emit(this.flipkartmsg)
  }

}
