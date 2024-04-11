import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ResumeComponent } from '../resume.component';
import { SectionComponent } from '../section-component';
import { JsonResume, Work } from 'src/app/json-resume/json-resume';
import { ResumeSection } from 'src/app/theming/theme';

@Component({
  selector: 'resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent<T> implements OnInit {
  @Input() resume: JsonResume;
  @Input() name: ResumeSection = undefined;

  @HostBinding('class')
  get classes() {
    return this.name;
  }

  constructor() { }

  ngOnInit() {
  }

  // TODO: This should be in a separate work section component.
  // TODO: This has bad performance, we should only calculate this on resume input changes.
  groupWork(items: Work[]): Work[][] {
    if (items.length === 0) {
      return [];
    }
    const groups: Work[][] = [[items[0]]];
    console.log(items, groups);

    for (let i = 1; i < items.length; ++i) {
      let previousGroup = groups[groups.length-1];
      let previousItem = previousGroup[previousGroup.length-1];
      let currentItem = items[i];

      if (previousItem.company === currentItem.company) {
        previousGroup.push(currentItem);
      } else {
        groups.push([currentItem]);
      }
    }

    return groups;
  }
}
