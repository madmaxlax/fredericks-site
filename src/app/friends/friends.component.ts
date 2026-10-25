import { Component } from '@angular/core';

export interface Friend {
  name: string;
  url: string;
  blurb: string;
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent {
  friends: Friend[] = [
    {
      name: 'Gutierrez Studios',
      url: 'https://www.gutierrezstudios.com',
      blurb:
        'Design, engineering, and fabrication studio working out of the old Poole and Hunt foundry at Clipper Mill.',
    },
    {
      name: 'Corradetti Glass',
      url: 'https://corradetti.com',
      blurb: 'Glassblowing studio and gallery at Clipper Mill, with workshops and events.',
    },
    {
      name: 'Woodberry Kitchen',
      url: 'https://www.woodberrykitchen.com',
      blurb: 'Restaurant and event space in Woodberry, built around Chesapeake farms and makers.',
    },
  ];
}
