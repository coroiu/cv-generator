import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import example from './example.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeProviderService {
  resume$: Observable<object> = of(example);

  constructor() { }
}
