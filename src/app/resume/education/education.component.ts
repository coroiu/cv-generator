import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() education: Education;

  constructor() { }

  ngOnInit() {
  }

}
