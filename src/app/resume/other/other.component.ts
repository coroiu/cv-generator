import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @Input() other: string;

  constructor() { }

  ngOnInit() {
  }

}
