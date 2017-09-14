import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { MainComponent } from './main/main.component';

const routes : Routes = [
  {
    path : 'main', component : MainComponent
  },
  {
    path : '', redirectTo : '/main', pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  declarations: [
    MainComponent
  ],
  exports : [
    RouterModule,
    MaterialModule
  ]
})
export class AppRoutingModule { }
