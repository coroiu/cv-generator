import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ResumeComponent } from '../resume.component';
import { SectionComponent } from '../section-component';

@Component({
  selector: 'resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent<T> implements OnInit, SectionComponent<T> {
  data: T[];
  @Input() name = '';
  @HostBinding('class')
  get classes() {
    return this.name;
  }

  constructor() { }

  ngOnInit() {
  }
}
