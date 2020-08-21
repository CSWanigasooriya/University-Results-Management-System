import { TestBed } from '@angular/core/testing';

import { SubscriberGuard } from './subscriber.guard';

describe('SubscriberGuard', () => {
  let guard: SubscriberGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubscriberGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
