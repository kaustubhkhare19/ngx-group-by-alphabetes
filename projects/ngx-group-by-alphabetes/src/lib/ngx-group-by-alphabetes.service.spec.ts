import { TestBed } from '@angular/core/testing';

import { GroupByAlphabetesService } from './ngx-group-by-alphabetes.service';

describe('NgxGroupByAlphabetesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupByAlphabetesService = TestBed.get(GroupByAlphabetesService);
    expect(service).toBeTruthy();
  });
});
