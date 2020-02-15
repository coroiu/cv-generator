import { Injectable, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import less from 'less';
import { Theme } from './theme';
import { ActivatedRoute } from '@angular/router';

const urlKey = 'theme';
const defaultUrl = 'assets/default-theme.json';

@Injectable({
  providedIn: 'root'
})
export class ThemeProviderService {
  // style$: Observable<string> = of('.test { background: green; }');

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  get theme$() {
    const themeUrl$ = this.route.queryParamMap.pipe(map(m => {
      if (m.has(urlKey)) {
        return m.get(urlKey);
      } else {
        return defaultUrl;
      }
    }))

    return themeUrl$.pipe(
      switchMap(themeUrl =>
        this.http
          .get<Theme>(themeUrl)
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
          )
      )
    );
  }
}
