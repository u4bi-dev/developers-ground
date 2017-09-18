import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../providers/core.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  constructor(private core : CoreService) { }

  ngOnInit() {
  }

}
