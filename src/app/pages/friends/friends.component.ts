import { IProfile } from './../../models/profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  profilesMock: Array<IProfile> = [
    {
      dateOfBirth: '15/10/1993',
      name: 'Dewey R. Meade',
      imageProfile: 'assets/images/faces/face12.jpg',
      nationality: 'Colombia',
      placeResidence: '123 Main Street, New York, NY 10030 '
    },
    {
      dateOfBirth: '07/03/1990',
      name: 'Lawrence L. Siemens',
      imageProfile: 'assets/images/faces/face2.jpg',
      nationality: 'USA',
      placeResidence: '3504 Single Street Lynn, MA 01901 '
    },
    {
      dateOfBirth: '30/11/2000',
      name: 'Charlie N. Coleman',
      imageProfile: 'assets/images/faces/face3.jpg',
      nationality: 'Brazil',
      placeResidence: '123 Main Street, New York, NY 10030 '
    },
    {
      dateOfBirth: '08/07/1985',
      name: 'Amanda W. Phelps',
      imageProfile: 'assets/images/faces/face6.jpg',
      nationality: 'Colombian',
      placeResidence: '123 Main Street, New York, NY 10030 '
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
