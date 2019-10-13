import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ResumeComponent } from '../resume.component';
import { SectionComponent } from '../section-component';
import { JsonResume } from 'src/app/json-resume/json-resume';
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
}
