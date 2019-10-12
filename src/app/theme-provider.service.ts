import { Injectable, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import less from 'less';

@Injectable({
  providedIn: 'root'
})
export class ThemeProviderService {
  // style$: Observable<string> = of('.test { background: green; }');

  constructor(
    private http: HttpClient
  ) { }

  get style$() {
    return this.http
      .get('assets/default-theme.less', { responseType: 'text' })
      .pipe(
        switchMap(v => from(less.render(v))),
        map(v => v.css),
      );
  }
}
