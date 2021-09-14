import { TestBed } from '@angular/core/testing';

import { FormfieldlabelService } from './formfieldlabel.service';

describe('FormfieldlabelService', () => {
  let service: FormfieldlabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormfieldlabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
