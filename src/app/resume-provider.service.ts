import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JsonResume } from './json-resume/json-resume.js';

import example from './example.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeProviderService {
  resume$: Observable<JsonResume> = of(example as any);

  constructor() { }
}
