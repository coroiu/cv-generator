import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input() work: Work;

  constructor() { }

  ngOnInit() {
  }

}
