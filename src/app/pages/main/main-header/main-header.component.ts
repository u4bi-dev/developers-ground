import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AddressSearchService } from '../../../providers/address-search.service';
import { AddressSearch } from '../../../providers/interface/address-search.interface';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private loading: boolean = false;
  public address: Observable<AddressSearch[]>;
  public searchField: FormControl;

  @ViewChild('addressSearchPanel') 
  public addressSearchPanel : ElementRef;
  public isSearch : boolean;
  public searchText : string;

  constructor(private addressSearch: AddressSearchService) {
    
    this.isSearch = false;

  }

  ngOnInit() {
    this.searchField = new FormControl();
    
    this.address = this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .do(_ => this.loading = true)
        .switchMap(term => this.addressSearch.search(term))
        .do(_ => {
          this.addressSearchPanel.nativeElement.focus();
          this.loading = false; 
        });    
  }

  onSearch(){  

    this.isSearch ? this.searchText = '' : setTimeout( () => this.addressSearchPanel.nativeElement.focus() , 100);
    
    this.isSearch = !this.isSearch;

  };

}
