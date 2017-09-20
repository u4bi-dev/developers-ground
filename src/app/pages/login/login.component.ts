import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('loginPanel') 
  public loginPanel : ElementRef;

  constructor(public core : CoreService) { }
  
  ngOnInit() {
    this.loginPanel.nativeElement.focus();

  }

}
