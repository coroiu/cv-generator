import { Component, OnInit, Input } from '@angular/core';
import { Award } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {
  @Input() award: Award;

  constructor() { }

  ngOnInit() {
  }

}
