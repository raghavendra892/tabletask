import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productstrat : string = "product deliverd"

  @Output() productstatus : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onstatusHan(){
    this.productstatus.emit(this.productstrat)
  }

}
