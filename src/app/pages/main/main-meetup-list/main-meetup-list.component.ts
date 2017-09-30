import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-meetup-list',
  templateUrl: './main-meetup-list.component.html',
  styleUrls: ['./main-meetup-list.component.css']
})
export class MainMeetupListComponent implements OnInit {

  public meetupList : Object;

  constructor() {
    
    this.meetupList = [
        { 
          image : './assets/icon_favicon.png',
          title : '목동 커피빈 모각코',
          address : '서울특별시 양천구 목동',
          join : 8
        },
        { 
          image : './assets/icon_favicon.png',
          title : '목동 커피빈 모각코',
          address : '서울특별시 양천구 목동',
          join : 8
        },
        { 
          image : './assets/icon_favicon.png',
          title : '목동 커피빈 모각코',
          address : '서울특별시 양천구 목동',
          join : 8
        },
        { 
          image : './assets/icon_favicon.png',
          title : '목동 커피빈 모각코',
          address : '서울특별시 양천구 목동',
          join : 8
        }
    ];
    
  }

  ngOnInit() {
  }

}
