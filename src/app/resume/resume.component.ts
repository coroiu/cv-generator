import { Component, OnInit, Input } from '@angular/core';
import { JsonResume } from '../json-resume/json-resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() resume: JsonResume;

  constructor() { }

  ngOnInit() {
  }

}
