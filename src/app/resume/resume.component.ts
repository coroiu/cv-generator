import { Component, OnInit, Input } from '@angular/core';
import { JsonResume } from '../json-resume/json-resume';
import { Theme, Section } from '../theming/theme';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() resume: JsonResume;

  constructor() { }

  ngOnInit() {
  }

  @Input('sections')
  set sections(value: Section[]) {
    console.log(value);
  }
}
