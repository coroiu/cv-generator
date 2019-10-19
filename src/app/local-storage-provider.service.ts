import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageProviderService implements OnDestroy {
  constructor() { }

  observable$(key: string) {
    return fromEvent<StorageEvent>(window, 'storage')
      .pipe(
        filter(e => e.key === key),
        map(e => e.newValue),
        startWith(window.localStorage.getItem(key))
      );
  }

  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  ngOnDestroy() {
  }
}
