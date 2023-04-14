import { Component } from '@angular/core';
import { Ipost, Istd } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'angularproject';
  msgfromchild ! : string
  productsatus !: string;

  layoutstatus ! :string
  flipkartmsg !: string;


  stdArraY : Array<Istd> = [
    {
      fname :"jhon",
      lname : "Doe",
      email : "jd546@gmail.com",
      contact : 9000001873
    }
  ]

  onStudentadd(std:Istd){
    this.stdArraY.push(std)
  }


  stdArrayy : Array<Istd> = [
      {
        fname :"Barney",
        lname : "stinson",
        email : "banrneyst6@gmail.com",
        contact : 8888812345
      }
    ]



    onStud(std:Istd){
    console.log(std)
    this.stdArrayy.push(std)
    // this.stdArrayy = [...this.stdArrayy, std]
  }


stdArray : Array<Istd> = [
  {
    fname :"Jake",
    lname : "peralta",
    email : "peraltjake@gmail.com",
    contact : 8928928921
  }
]



onStdAdded(std:Istd){
  console.log(std)
  this.stdArray.push(std)
}







//  9 Vi TASK
// fnameval !: string;
// lnameval !: string;
// emailval !: string;
// contactval !: string;

// onAddStudent(){
//  let obj : Istd = {
//   fname : this.fnameval,
//   lname : this.lnameval,
//   email : this.emailval,
//   contact : +this.contactval
// }
//   this.stdArray.push(obj)

//   this.fnameval = " ";
//   this.lnameval = " ";
//   this.emailval = " ";
//   this.contactval = " ";
// }




// postsInfo : Array<Ipost> = [
//   {
//     title : "Angular 15 Sandalone Components",
//     body : "Angular 15 has new feature Sandlone Components"
//   },
//   {
//     title : "Angular 15 Sandalone HttpModule",
//     body : "Angular 15 has new feature Sandalone HttpModule"

//   },
//   {
//     title : "Angular 16 Signals",
//     body : "Angular 16 has new feature Signals alternative for Rxjs Subjects"
//   }
 
// ]








  // onmsgfromchild(e:any){
  //   console.log(e)
  //   this.msgfromchild = e
  // }

  // onstatusHandler(e:any){
  //   console.log(e)
  //   this.productsatus = e
  // }

  // layouthand(e:any){
  //   console.log(e)
  //   this.layoutstatus = e
  // }

  // onhandleflipk(e:any){
  //   console.log(e)
  //   this.onhandleflipk = e
  // }
}