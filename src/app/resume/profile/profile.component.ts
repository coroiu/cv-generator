import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Profile } from 'src/app/json-resume/json-resume';
import { stringify } from '@angular/compiler/src/util';
import { toKebabCase } from 'src/app/utils';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;

  @HostBinding('class')
  get hostClass() {
    if (this.profile) {
      return toKebabCase(this.profile.network);
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
