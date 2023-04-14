import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/post';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

 @Output() addStdInfo : EventEmitter<Istd> = new EventEmitter<Istd>()

  fnameval !: string ;
  lnameval !: string;
  emailval !: string;
  contactval !: string;
  
  constructor() { }

  ngOnInit(): void {
  }


  onAddStudent(){
    let obj : Istd = {
     fname : this.fnameval,
     lname : this.lnameval,
     email : this.emailval,
     contact : +this.contactval
   }
     
    console.log(obj)
    this.addStdInfo.emit(obj)
     this.fnameval = " ";
     this.lnameval = " ";
     this.emailval = " ";
     this.contactval = " ";
   }
}
