import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';
import { MainInfoComponent } from './pages/main/main-info/main-info.component';

import { LoginComponent } from './pages/login/login.component';

import { RegistComponent, RegistAvatarDialog } from './pages/regist/regist.component';

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
    LoginComponent,
    RegistComponent,    
    RegistAvatarDialog  
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
