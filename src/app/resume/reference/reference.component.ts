import { Component, OnInit, Input } from '@angular/core';
import { Reference } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  @Input() reference: Reference;

  constructor() { }

  ngOnInit() {
  }

}
