import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 @Input() postDetails ! : Ipost

  constructor() { }

  ngOnInit(): void {
  }

}
