import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
      .get('assets/default-theme.scss', { responseType: 'text' });
  }
}
