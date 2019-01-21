import { TestBed } from '@angular/core/testing';

import { AlbumsServiceService } from './albums-service.service';

describe('AlbumsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumsServiceService = TestBed.get(AlbumsServiceService);
    expect(service).toBeTruthy();
  });
});
