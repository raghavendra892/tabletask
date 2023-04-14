import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nchild',
  templateUrl: './nchild.component.html',
  styleUrls: ['./nchild.component.scss']
})
export class NchildComponent implements OnInit {
  msgfromchild ="i will wprk hard"
  @Output() getmsgfromchild : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  onmsgsend(){
    this.getmsgfromchild.emit(this.msgfromchild)
  }
}
