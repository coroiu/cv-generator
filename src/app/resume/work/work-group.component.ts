import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Work } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'work-group',
  templateUrl: './work-group.component.html',
  // styleUrls: ['./work.component.scss']
})
export class WorkGroupComponent {
  @Input() items: Work[];

  constructor() {}

  get work() {
    return this.items[0];
  }

  @HostBinding("class")
  get classes() {
    return this.items.length > 1 ? ["multi-item"] : ["single-item"]
  }
}
