import { TestBed } from '@angular/core/testing';

import { ResumeProviderService } from './resume-provider.service';

describe('ResumeProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeProviderService = TestBed.get(ResumeProviderService);
    expect(service).toBeTruthy();
  });
});
