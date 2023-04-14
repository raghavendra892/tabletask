import { Component, Input, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/post';

@Component({
  selector: 'app-table-temp-ref',
  templateUrl: './table-temp-ref.component.html',
  styleUrls: ['./table-temp-ref.component.scss']
})
export class TableTempRefComponent implements OnInit {
  @Input() stdInfoo ! : Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
