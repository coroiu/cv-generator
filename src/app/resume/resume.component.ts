import { Component, OnInit, Input } from '@angular/core';
import { JsonResume } from '../json-resume/json-resume';
import { Theme } from '../theming/theme';

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

  @Input()
  set theme(value: Theme) {
    console.log(value);
  }
}
