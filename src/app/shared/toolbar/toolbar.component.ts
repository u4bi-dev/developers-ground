import { Component, HostListener, OnInit,Inject } from '@angular/core';
import { CoreService } from '../../providers/core.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  scroll : Object = {};
  routerUrl : string; 

  constructor(public core : CoreService, @Inject(DOCUMENT) private document: Document, private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event:NavigationStart) => {
        this.routerUrl = event.url;
        this.scroll = ( this.routerUrl === '/main' || this.routerUrl === '/' ) ? { 'background' : 'transparent', 'box-shadow' : 'none' } : { 'background' : '#4E2A84', 'box-shadow' : '0 4px 4px rgba(0, 0, 0, 0.24), 0 0 4px rgba(0, 0, 0, 0.12)' }
      });

  }
  
  ngOnInit() {
    
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scroll = document.body.scrollTop < 270 && ( this.routerUrl === '/main' || this.routerUrl === '/' ) ? { 'background' : 'transparent', 'box-shadow' : 'none' } : { 'background' : '#4E2A84', 'box-shadow' : '0 4px 4px rgba(0, 0, 0, 0.24), 0 0 4px rgba(0, 0, 0, 0.12)' };
  }

}
