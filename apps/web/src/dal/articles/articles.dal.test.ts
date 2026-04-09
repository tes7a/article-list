import MockAdapter from 'axios-mock-adapter';
import { afterEach, describe, expect, it } from 'vitest';

import { getArticles } from '@/dal/articles/articles.dal';
import { apiInstance } from '@/dal/http/api-instance';
import { ApiRoute } from '@/lib/constants/api';

const mock = new MockAdapter(apiInstance);

afterEach(() => {
  mock.reset();
});

describe('articles DAL', () => {
  it('requests articles from our api endpoint', async () => {
    const articles = [
      {
        id: '1',
        title: 'AI is transforming healthcare',
        topic: 'technology',
        publishedAt: '2026-03-20T10:15:00Z',
      },
    ];

    mock.onGet(ApiRoute.Articles).reply(200, articles);

    const result = await getArticles();

    expect(result).toEqual(articles);
    expect(mock.history.get).toHaveLength(1);
    expect(mock.history.get[0]?.url).toBe(ApiRoute.Articles);
  });
});
