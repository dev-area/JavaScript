/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Sre1Service } from './sre1.service';

describe('Sre1Service', () => {
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers: [Sre1Service]
    });
  });

  it('should ...', inject([Sre1Service], (service: Sre1Service) => {
    expect(service).toBeTruthy();
  }));
});
