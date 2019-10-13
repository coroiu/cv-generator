import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumeProviderService } from './resume-provider.service';
import { Observable, of, Subscription } from 'rxjs';
import { JsonResume } from './json-resume/json-resume';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeProviderService } from './theme-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  resume: Observable<JsonResume>;
  styleSubscription: Subscription;
  themeElements = 0;

  constructor(
    private resumeProvider: ResumeProviderService,
    private themeProvider: ThemeProviderService
  ) {}

  ngOnInit() {
    this.resume = this.resumeProvider.resume$;
    this.styleSubscription = this.themeProvider.style$.subscribe(v => {
      document.head.querySelector('#dynamic-theme').innerHTML = v;

      const e = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--theme-elements'), 10);
      if (e) {
        this.themeElements = e;
      }
    });
  }

  ngOnDestroy() {
    this.styleSubscription.unsubscribe();
  }
}
