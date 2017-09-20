import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';

import { AddressSearchService } from '../../providers/address-search.service';

import { User } from '../../providers/interface/user.interface';
import { AddressSearch } from '../../providers/interface/address-search.interface';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  public registForm: FormGroup;
  public url: string = '';

  private loading: boolean = false;
  public address: Observable<AddressSearch[]>;
  public searchField: FormControl;

  public seletedAddress = {
    dong : '',
    si : '',
    do : ''
  };

  @ViewChild('emailPanel')
  public emailPanel : ElementRef;
  @ViewChild('addressSearchPanel')
  public addressSearchPanel : ElementRef;

  constructor(
    private _fb: FormBuilder,
    public dialog: MdDialog,
    private addressSearch: AddressSearchService) { }
         
  ngOnInit() {

    this.emailPanel.nativeElement.focus();

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
    

    this.registForm = this._fb.group({
      avatar            : ['', []],
      name              : ['', [
        <any> Validators.minLength(2),
        <any> Validators.required,
        <any> Validators.pattern(/^[\uac00-\ud7a3]*$/)
      ]],
      email             : ['', [
        <any> Validators.required,
        <any> Validators.pattern(/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
      ]],
      password          : ['', [
        <any> Validators.required,
        <any> Validators.minLength(8),
        <any> Validators.maxLength(16),
        <any> Validators.pattern(/^.*(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_\)\(+=|}{\]\[\'\":;><.,?/]).*$/) 
      ]],
      address           : this._fb.group({
          do            : ['', [ ]],
          si            : ['', [ ]],
          dong          : ['', [ ]]
      })
    });

  }

  save(model: User, isValid: boolean) {
    
    if(isValid){
      model.avatar = this.url;
      model.address = this.seletedAddress;

      alert('회원가입이 완료되었습니다.');
    }
    
  }
  
  isValid = (record : string, value : string) => this.registForm.controls[record]['_errors'] ? this.registForm.controls[record]['_errors'][value] : false;
  openAddressPanel = () => setTimeout( () => this.addressSearchPanel.nativeElement.focus() , 50);
  hideAddressPanel = () => this.emailPanel.nativeElement.focus();
  
  dialogAvatar(){
    
    let dialogRef = this.dialog.open(RegistAvatarDialog, {
      width: '240px',
      data: { 
        url: this.url
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.url = result;
    });

  }
  
}

@Component({
  selector: 'dialog-regist-avatar',
  templateUrl: './regist-avatar.dialog.html',
  styleUrls: ['./regist-avatar.dialog.css']
})

export class RegistAvatarDialog {

  constructor(
    public dialogRef: MdDialogRef<RegistAvatarDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}