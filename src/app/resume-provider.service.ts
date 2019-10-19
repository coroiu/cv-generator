import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, BehaviorSubject, combineLatest } from 'rxjs';
import { JsonResume } from './json-resume/json-resume.js';

import { LocalStorageProviderService } from './local-storage-provider.service.js';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const editingKey = 'editing.json';
const resumeKey = 'resume.json';
const urlKey = 'resume';
const exampleUrl = 'assets/example-resume.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeProviderService implements OnDestroy {
  private subscription: Subscription;
  private resumeSubject$ = new BehaviorSubject<string>('');

  constructor(
    http: HttpClient,
    route: ActivatedRoute,
    private storage: LocalStorageProviderService
  ) {
    this.subscription = combineLatest(
      this.storage.observable$(editingKey),
      this.storage.observable$(resumeKey),
      route.paramMap.pipe(map(m => {
        if (m.has(urlKey)) {
          return m.get(urlKey);
        } else {
          return exampleUrl;
        }
      }))
    ).pipe(
      switchMap(v => {
        const editing: boolean = JSON.parse(v[0]);
        const resume = v[1];
        const url = v[2];

        if (editing) {
          return of(resume);
        } else {
          return http.get(url, { responseType: 'text' })
            .pipe(
              tap(r => this.storage.set(resumeKey, r))
            );
        }
      })
    ).subscribe(this.resumeSubject$);
  }

  get resume$(): Observable<JsonResume> {
    return this.resumeSubject$.pipe(
      map(v => {
        try {
          return JSON.parse(v);
        } catch {
          return {};
        }
      })
    );
  }

  get resumeRaw$(): Observable<string> {
    return this.resumeSubject$;
  }

  get canReset() {
    return this.storage.get(editingKey) === JSON.stringify(true);
  }

  reset() {
    this.storage.set(editingKey, JSON.stringify(false));
  }

  save(resume: string) {
    this.storage.set(resumeKey, resume);
    this.storage.set(editingKey, JSON.stringify(true));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
