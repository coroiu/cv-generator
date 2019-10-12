import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() email: string;
  @Input() picture: string;

  constructor() { }

  ngOnInit() {
  }

  get useGravatar() {
    return this.email !== undefined && this.picture === undefined;
  }

  get usePicture() {
    return this.picture !== undefined;
  }
}
