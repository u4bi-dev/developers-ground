import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onRouter(val : string){
    this._router.navigate([val]);
  }

}
