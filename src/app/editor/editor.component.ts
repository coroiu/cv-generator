import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ResumeProviderService } from '../resume-provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  editorOptions = {
    theme: 'vs-dark',
    language: 'json'
  };
  resume: string;

  constructor(
    private resumeProvider: ResumeProviderService
  ) { }

  ngOnInit() {
    this.subscription = this.resumeProvider.resumeRaw$
      .subscribe(r => {
        this.resume = r;
      });
  }

  save(resume: string) {
    this.resumeProvider.save(resume);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
