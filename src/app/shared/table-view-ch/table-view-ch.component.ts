import { Component, Input, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/post';

@Component({
  selector: 'app-table-view-ch',
  templateUrl: './table-view-ch.component.html',
  styleUrls: ['./table-view-ch.component.scss']
})
export class TableViewChComponent implements OnInit {
@Input() stdInfO ! : Array<Istd>
  constructor() { }
  
  ngOnInit(): void {
  }

}
