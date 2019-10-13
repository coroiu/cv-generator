import { TestBed } from '@angular/core/testing';

import { ComponentFactoryResolverService } from './component-factory-resolver.service';

describe('ComponentResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentFactoryResolverService = TestBed.get(ComponentFactoryResolverService);
    expect(service).toBeTruthy();
  });
});
