import { TestBed } from '@angular/core/testing';

import { GuardroleGuard } from './guardrole.guard';

describe('GuardroleGuard', () => {
  let guard: GuardroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
