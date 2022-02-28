import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-sms',
  templateUrl: './text-sms.component.html',
  styleUrls: ['./text-sms.component.css']
})
export class TextSmsComponent implements OnInit {

  message:string='';
  maxCharCount:number=20;

  constructor() { }

  ngOnInit(): void {

  }

  checkMaxLength(value:any){
    if(value.length>=this.maxCharCount){
      alert(`you are only allowed to enter ${this.maxCharCount}`)
    }
  }

 

}
