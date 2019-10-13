import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumeProviderService } from './resume-provider.service';
import { Observable, of, Subscription } from 'rxjs';
import { JsonResume } from './json-resume/json-resume';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeProviderService } from './theming/theme-provider.service';
import { Theme, Sections } from './theming/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  resume$: Observable<JsonResume>;
  sections: Sections = {};
  themeSubscription: Subscription;
  themeElements = 0;

  constructor(
    private resumeProvider: ResumeProviderService,
    private themeProvider: ThemeProviderService
  ) {}

  ngOnInit() {
    this.resume$ = this.resumeProvider.resume$;
    this.themeSubscription = this.themeProvider.theme$.subscribe(t => {
      document.head.querySelector('#dynamic-theme').innerHTML = t.style;
      this.sections = t.sections;
      // const e = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--theme-elements'), 10);
      // if (e) {
      //   this.themeElements = e;
      // }
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
