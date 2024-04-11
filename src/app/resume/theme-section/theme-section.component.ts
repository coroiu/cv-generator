import { Component, OnInit, HostBinding, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SectionComponent } from '../section-component';
import { JsonResume } from 'src/app/json-resume/json-resume';
import { ResumeSection } from 'src/app/theming/theme';

@Component({
  selector: 'theme-section',
  templateUrl: './theme-section.component.html',
  styleUrls: ['./theme-section.component.scss']
})
export class ThemeSectionComponent implements OnInit {
  @Input() resume: JsonResume;

  @Input() sections: ResumeSection[] = [];
  @Input() name = '';
  @HostBinding('class')
  get classes() {
    return this.name;
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  parseSectionName(name: string) {
    console.log(name);
    return name.split(";")[0];
  }

  parseSectionStart(name: string) {
    const split = name.split(";");
    if (split.length === 1) {
      return 0;
    }

    return parseInt(split[1].split("-")[0]);
  }

  parseSectionEnd(name: string) {
    const split = name.split(";");
    if (split.length === 1) {
      return undefined;
    }

    return parseInt(split[1].split("-")[1]);
  }
}
