import { changelogPlugin } from './plugin';

describe('changelog', () => {
  it('should export plugin', () => {
    expect(changelogPlugin).toBeDefined();
  });
});
