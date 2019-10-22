import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { JsonResume } from '../json-resume/json-resume';
import { ResumeSection, Theme } from '../theming/theme';
import { ResumeProviderService } from '../resume-provider.service';
import { ThemeProviderService } from '../theming/theme-provider.service';
import { Subscription, Observable, combineLatest } from 'rxjs';

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
  pages: { name: string, sections: ResumeSection[] }[][];

  constructor(
    public resumeProvider: ResumeProviderService,
    private themeProvider: ThemeProviderService
  ) { }

  ngOnInit() {
    this.resume$ = this.resumeProvider.resume$;
    combineLatest(
      this.resumeProvider.resume$,
      this.themeProvider.theme$
    ).subscribe(v => {
      const resume = v[0];
      let theme = v[1];

      if (resume !== undefined && resume.meta !== undefined && 'theme' in resume.meta ) {
        const overrides = (resume.meta as { theme: Theme }).theme;
        theme = { ...theme, ...overrides };
      }

      document.head.querySelector('#dynamic-theme').innerHTML = theme.style;

      this.pages = [];
      this.sections = [];
      for (let i = 0; i < theme.pages.length; ++i) {
        this.pages.push([] as any);
        for (const [name, sections] of Object.entries(theme.pages[i])) {
          this.pages[i].push({ name, sections });

          const existingSection = this.sections.find(s => s.name === name);
          if (existingSection) {
            existingSection.sections = [...existingSection.sections, ...sections];
          } else {
            this.sections.push({ name, sections });
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
