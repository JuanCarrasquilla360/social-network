import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ProfileComponent,
    HomepageComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
