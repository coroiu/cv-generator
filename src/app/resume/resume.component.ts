import { Component, OnInit, Input } from '@angular/core';
import { JsonResume } from '../json-resume/json-resume';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() resume: JsonResume;
  @Input() themeElements = 0;

  constructor() { }

  ngOnInit() {
  }

  get elementClasses() {
    const arr = [];
    for (let i = 0; i < this.themeElements; ++i) {
      arr.push(`theme-element theme-element-${i}`);
    }
    return arr;
  }
}
