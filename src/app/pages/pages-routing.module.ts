import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path: 'homepage', component: PagesComponent, children: [
    {path: '', component: HomepageComponent},
    {path: 'profile', component: ProfileComponent},
  ]},
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
