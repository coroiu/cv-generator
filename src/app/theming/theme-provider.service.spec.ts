import { TestBed } from '@angular/core/testing';

import { ThemeProviderService } from './theme-provider.service';

describe('ThemeProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeProviderService = TestBed.get(ThemeProviderService);
    expect(service).toBeTruthy();
  });
});
