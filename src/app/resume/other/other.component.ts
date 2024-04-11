import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @Input() other: string;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  get unsafe() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.other);
  }

}
