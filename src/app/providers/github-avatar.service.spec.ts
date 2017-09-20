import { TestBed, inject } from '@angular/core/testing';

import { GithubAvatarService } from './github-avatar.service';

describe('GithubAvatarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubAvatarService]
    });
  });

  it('should be created', inject([GithubAvatarService], (service: GithubAvatarService) => {
    expect(service).toBeTruthy();
  }));
});
