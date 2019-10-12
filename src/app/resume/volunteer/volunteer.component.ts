import { Component, OnInit, Input } from '@angular/core';
import { Volunteer } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  @Input() volunteer: Volunteer;

  constructor() { }

  ngOnInit() {
  }

}
