import { describe, expect, it, vi } from 'vitest';

import { articles, getArticles } from '@/dal/articles/articles.dal';

describe('articles DAL', () => {
  it('returns mocked articles list as if it came from the server', async () => {
    vi.useFakeTimers();

    const resultPromise = getArticles();

    await vi.runAllTimersAsync();

    const result = await resultPromise;

    expect(result).toEqual(articles);
    expect(result).toHaveLength(12);

    vi.useRealTimers();
  });
});
