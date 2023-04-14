import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/post';

@Component({
  selector: 'app-form-temp-ref',
  templateUrl: './form-temp-ref.component.html',
  styleUrls: ['./form-temp-ref.component.scss']
})
export class FormTempRefComponent implements OnInit {
 @Output() addStdInfoo : EventEmitter<Istd> = new EventEmitter<Istd>()
  fname !: string;
  lname!: string;
  email!: string;
  contact!: string;

  constructor() { }

  ngOnInit(): void {
  }
  onAddStudentt(fname:HTMLInputElement, lname:HTMLInputElement, email:HTMLInputElement, contact:HTMLInputElement){
    //console.log(fname.value)
    let obj : Istd = {
      fname : fname.value,
      lname : lname.value,
      email : email.value,
      contact : +contact.value
    }
    console.log(obj)
    this.addStdInfoo.emit(obj)
    fname.value = " "
    lname.value = " "
    email.value = " "
    contact.value = " "
  }
}
