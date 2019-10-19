import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, BehaviorSubject, combineLatest } from 'rxjs';
import { JsonResume } from './json-resume/json-resume.js';

import { LocalStorageProviderService } from './local-storage-provider.service.js';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, tap } from 'rxjs/operators';

const editingKey = 'editing.json';
const resumeKey = 'resume.json';
const exampleUrl = 'assets/example-resume.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeProviderService implements OnDestroy {
  private subscription: Subscription;
  private resumeSubject$ = new BehaviorSubject<JsonResume>({});
  private urlSubject$ = new BehaviorSubject<string>(exampleUrl);

  constructor(
    http: HttpClient,
    private storage: LocalStorageProviderService
  ) {
    this.subscription = combineLatest(
      this.storage.observable$(editingKey),
      this.storage.observable$(resumeKey),
      this.urlSubject$
    ).pipe(
      switchMap(v => {
        const editing: boolean = JSON.parse(v[0]);
        const resume = v[1];
        const url = v[2];

        if (editing) {
          return of(resume).pipe(map(r => JSON.parse(r)));
        } else {
          return http.get<JsonResume>(url)
            .pipe(
              tap(r => this.storage.set(resumeKey, JSON.stringify(r)))
            );
        }
      })
    ).subscribe(this.resumeSubject$);
  }

  get resume$(): Observable<JsonResume> {
    return this.resumeSubject$;
  }

  reset() {
    this.storage.set(editingKey, JSON.stringify(false));
  }

  save(resume: JsonResume) {
    this.storage.set(resumeKey, JSON.stringify(resume));
    this.storage.set(editingKey, JSON.stringify(true));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
