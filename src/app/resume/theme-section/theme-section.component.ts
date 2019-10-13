import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'theme-section',
  templateUrl: './theme-section.component.html',
  styleUrls: ['./theme-section.component.scss']
})
export class ThemeSectionComponent implements OnInit {
  @Input() name = '';

  @HostBinding('class')
  get classes() {
    return this.name;
  }

  constructor() { }

  ngOnInit() {
  }

}
