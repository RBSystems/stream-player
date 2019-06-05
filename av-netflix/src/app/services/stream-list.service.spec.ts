import { TestBed } from '@angular/core/testing';

import { StreamListService } from './stream-list.service';

describe('StreamListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreamListService = TestBed.get(StreamListService);
    expect(service).toBeTruthy();
  });
});
