import { IProfile, Profile } from './../../models/profile.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-friend-profile',
  templateUrl: './show-friend-profile.component.html',
  styleUrls: ['./show-friend-profile.component.scss']
})
export class ShowFriendProfileComponent implements OnInit {
  @Input('profile') _profile!: IProfile 
  get profile(){
    return new Profile(this._profile)
  }
  constructor() { }

  ngOnInit(): void {

  }

}
