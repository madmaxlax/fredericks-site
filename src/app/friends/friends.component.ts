import { Component } from '@angular/core';

export interface Friend {
  name: string;
  url: string;
  logo: string;
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
      logo: 'assets/friends/gutierrez-studios.svg',
      blurb:
        'Design, engineering, and fabrication studio working out of the old Poole and Hunt foundry at Clipper Mill.',
    },
    {
      name: 'Anything Wood & Metal',
      url: 'https://www.anythingwoodandmetal.com',
      logo: 'assets/friends/anything-wood-and-metal.webp',
      blurb: 'Custom wood and metal furniture, built in Baltimore since 1999.',
    },
    {
      name: 'Corradetti Glass',
      url: 'https://corradetti.com',
      logo: 'assets/friends/corradetti-glass.webp',
      blurb: 'Glassblowing studio and gallery at Clipper Mill, with workshops and events.',
    },
    {
      name: 'Woodberry Kitchen',
      url: 'https://www.woodberrykitchen.com',
      logo: 'assets/friends/woodberry-kitchen.webp',
      blurb: 'Restaurant and event space in Woodberry, built around Chesapeake farms and makers.',
    },
    {
      name: 'Cross Street Partners',
      url: 'https://crossstpartners.com',
      logo: 'assets/friends/cross-street-partners.svg',
      blurb:
        'Development firm led by Bill Struever and Cobber Eccles, still bringing historic Baltimore buildings back to life.',
    },
    {
      name: 'MD Architectural Rescue',
      url: 'https://mdarchitecturalrescue.weebly.com',
      logo: 'assets/friends/md-architectural-rescue.jpg',
      blurb:
        "Keith Kitts's salvage warehouse in the old Baltimore Traction Co. building. Open house the second Saturday of every month.",
    },
  ];
}
