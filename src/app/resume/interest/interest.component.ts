import { Component, OnInit, Input } from '@angular/core';
import { Interest } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  @Input() interest: Interest;

  constructor() { }

  ngOnInit() {
  }

}
