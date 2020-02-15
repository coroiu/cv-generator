import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}
