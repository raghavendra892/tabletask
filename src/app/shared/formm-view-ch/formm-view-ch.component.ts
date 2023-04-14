import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from 'src/app/model/post';

@Component({
  selector: 'app-formm-view-ch',
  templateUrl: './formm-view-ch.component.html',
  styleUrls: ['./formm-view-ch.component.scss']
})
export class FormmViewChComponent implements OnInit {
  @Output() addStdInfoR : EventEmitter<Istd> = new EventEmitter<Istd>()

  @ViewChild("fnamevalue") fnameEle ! : ElementRef;
  @ViewChild("lnamevalue") lanmeEle ! : ElementRef;
  @ViewChild("emailvalue") emailEle ! : ElementRef;
  @ViewChild("contactvalue") contactEle ! : ElementRef
   constructor() { }
 
   ngOnInit(): void {
   }
 
   onAddStudenT(){
    // console.log(this.fnameEle.nativeElement.value)
    let obj : Istd = {
      fname : this.fnameEle.nativeElement.value,
      lname : this.lanmeEle.nativeElement.value,
      email : this.emailEle.nativeElement.value,
      contact : this.contactEle.nativeElement.value,
    }
      console.log(obj)
      this.addStdInfoR.emit(obj)
      this.fnameEle.nativeElement.value = "";
      this.lanmeEle.nativeElement.value = "";
      this.emailEle.nativeElement.value = "" ;
      this.contactEle.nativeElement.value = "";

   }
}
