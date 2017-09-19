import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { User } from './user.interface';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  public registForm: FormGroup;
  public url: string = '';

  public address = [
    {do: '서울특별시', si: '동대문구', dong : '장안동'},
    {do: '서울특별시', si: '동대문구', dong : '장안동'},
    {do: '서울특별시', si: '동대문구', dong : '장안동'},
    {do: '서울특별시', si: '동대문구', dong : '장안동'},
    {do: '서울특별시', si: '동대문구', dong : '장안동'},
    {do: '서울특별시', si: '동대문구', dong : '장안동'}
  ];

  public seletedAddress = {
    do : '',
    si : '',
    dong : ''
  };

  constructor(private _fb: FormBuilder, public dialog: MdDialog) { }

  ngOnInit() {
    
    this.registForm = this._fb.group({
      avatar            : ['', []],
      name              : ['', [
        <any> Validators.minLength(2),
        <any> Validators.required,
        <any> Validators.pattern(/^[\uac00-\ud7a3]*$/)
      ]],
      email             : ['', [
        <any> Validators.required,
        <any> Validators.email
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
    model.avatar = this.url;
    model.address = this.seletedAddress;
    console.log(model, isValid);
    
  }
  
  isValid = (record : string, value : string) => this.registForm.controls[record]['_errors'] ? this.registForm.controls[record]['_errors'][value] : false;

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