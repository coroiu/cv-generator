import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { JsonResume } from '../json-resume/json-resume';
import { Theme, Sections } from '../theming/theme';
import { ComponentFactoryResolverService } from './component-factory-resolver.service';
import { ThemeSectionComponent } from './theme-section/theme-section.component';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() resume: JsonResume;
  @ViewChild('themeHost', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolverService
  ) { }

  ngOnInit() {
  }

  @Input('sections')
  set sections(value: Sections) {
    console.log(value);

    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
      for (const [name, section] of Object.entries(value)) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(name);
        const componentRef = this.viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as ThemeSectionComponent).name = name;
      }
    }
  }
}
