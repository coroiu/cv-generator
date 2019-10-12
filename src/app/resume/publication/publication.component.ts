import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'src/app/json-resume/json-resume';

@Component({
  selector: 'publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input() publication: Publication;

  constructor() { }

  ngOnInit() {
  }

}
