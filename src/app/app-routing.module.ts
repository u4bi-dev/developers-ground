import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';
import { MainInfoComponent } from './pages/main/main-info/main-info.component';

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
    MainComponent,
    MainHeaderComponent,
    MainInfoComponent
  ],
  exports : [
    RouterModule,
    MaterialModule
  ]
})
export class AppRoutingModule { }
