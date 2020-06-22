import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public isPlay = false;
  public isDisplay = false;

  constructor() { }

  ngOnInit(): void {
  }
  playFun(){
    this.isPlay = true;
  }
}
