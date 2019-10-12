import { Component, OnInit } from '@angular/core';
import { ResumeProviderService } from './resume-provider.service';
import { Observable } from 'rxjs';
import { JsonResume } from './json-resume/json-resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resume: Observable<JsonResume>;

  constructor(
    private provider: ResumeProviderService
  ) {}

  ngOnInit() {
    this.resume = this.provider.resume$;
  }
}
