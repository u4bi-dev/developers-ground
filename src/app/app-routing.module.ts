import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';
import { MainInfoComponent } from './pages/main/main-info/main-info.component';
import { MainFeatureComponent } from './pages/main/main-feature/main-feature.component';
import { MainNoticeComponent } from './pages/main/main-notice/main-notice.component';
import { MainMeetupListComponent } from './pages/main/main-meetup-list/main-meetup-list.component';

import { LoginComponent } from './pages/login/login.component';

import { RegistComponent, RegistAvatarDialog } from './pages/regist/regist.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes : Routes = [
  {
    path : 'main', component : MainComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'regist', component : RegistComponent
  },
  {
    path : 'reset', component : ResetComponent
  },
  {
    path : '', redirectTo : '/main', pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainInfoComponent,
    MainFeatureComponent,
    MainNoticeComponent,
    MainMeetupListComponent,
    LoginComponent,
    RegistComponent,
    RegistAvatarDialog,
    ResetComponent
  ],
  entryComponents : [
    RegistAvatarDialog
  ],
  exports : [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
