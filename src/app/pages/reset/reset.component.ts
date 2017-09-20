import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
 
  @ViewChild('emailPanel')
  public emailPanel : ElementRef;
  // public isVaildEmail : any;

  constructor() { }

  ngOnInit() {

    this.emailPanel.nativeElement.focus();
    
  }

  // check = () => this.isVaildEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(this.emailPanel.nativeElement.value);

}
