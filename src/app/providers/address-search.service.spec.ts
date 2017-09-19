import { TestBed, inject } from '@angular/core/testing';

import { AddressSearchService } from './address-search.service';

describe('AddressSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressSearchService]
    });
  });

  it('should be created', inject([AddressSearchService], (service: AddressSearchService) => {
    expect(service).toBeTruthy();
  }));
});
