import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/json-resume/json-resume';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
  }

  get iconClasses() {
    const classes = ['icon'];
    if (this.profile.network) {
      classes.push(this.profile.network.toLowerCase());
    }
    return classes;
  }
}
