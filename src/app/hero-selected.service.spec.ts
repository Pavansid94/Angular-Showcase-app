import { TestBed, inject } from '@angular/core/testing';

import { HeroSelectedService } from './hero-selected.service';

describe('HeroSelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroSelectedService]
    });
  });

  it('should be created', inject([HeroSelectedService], (service: HeroSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
