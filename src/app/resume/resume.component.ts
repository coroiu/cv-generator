import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { JsonResume } from '../json-resume/json-resume';
import { ResumeSection } from '../theming/theme';
import { ResumeProviderService } from '../resume-provider.service';
import { ThemeProviderService } from '../theming/theme-provider.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit, OnDestroy {
  @ViewChild('themeHost', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;
  resume$: Observable<JsonResume>;
  resumeSubscription: Subscription;
  themeSubscription: Subscription;
  themeElements = 0;
  sections: { name: string, sections: ResumeSection[] }[];

  constructor(
    public resumeProvider: ResumeProviderService,
    private themeProvider: ThemeProviderService
  ) { }

  ngOnInit() {
    this.resume$ = this.resumeProvider.resume$;
    this.themeSubscription = this.themeProvider.theme$.subscribe(t => {
      document.head.querySelector('#dynamic-theme').innerHTML = t.style;
      this.sections = [];
      for (const [name, sections] of Object.entries(t.sections)) {
        this.sections.push({ name, sections });
      }
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
