import { Injectable, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import less from 'less';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeProviderService {
  // style$: Observable<string> = of('.test { background: green; }');

  constructor(
    private http: HttpClient
  ) { }

  get theme$() {
    return this.http
      .get<Theme>('assets/default-theme.json')
      .pipe(
        switchMap(t => {
          if (t.styleUrl) {
            return this.http
              .get(t.styleUrl, { responseType: 'text' })
              .pipe(
                switchMap(v => from(less.render(v))),
                map(v => {
                  t.style = v.css;
                  return t;
                }),
              );
          } else {
            return of(t);
          }
        })
      );
  }

  get style$() {
    return this.http
      .get('assets/default-theme.less', { responseType: 'text' })
      .pipe(
        switchMap(v => from(less.render(v))),
        map(v => v.css),
      );
  }
}
