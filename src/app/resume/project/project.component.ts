import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
