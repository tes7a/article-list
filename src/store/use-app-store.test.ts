import { describe, expect, it } from 'vitest';

import type { Article } from '@/dal/articles/articles.dal';
import { getVisibleArticles } from '@/store/app-store.utils';

const articles: Article[] = [
  {
    id: '2',
    title: 'Stock market trends in 2026',
    topic: 'finance',
    publishedAt: '2026-03-18T08:30:00Z',
  },
  {
    id: '1',
    title: 'AI is transforming healthcare',
    topic: 'technology',
    publishedAt: '2026-03-20T10:15:00Z',
  },
  {
    id: '4',
    title: 'Mental health awareness is rising',
    topic: 'health',
    publishedAt: '2026-03-10T09:45:00Z',
  },
];

describe('appStoreUtils', () => {
  it('sorts articles by newest date first', () => {
    const result = getVisibleArticles(articles, 'date-desc', 'all', '');

    expect(result.map((article) => article.id)).toEqual(['1', '2', '4']);
  });

  it('sorts articles by title from a to z', () => {
    const result = getVisibleArticles(articles, 'title-asc', 'all', '');

    expect(result.map((article) => article.title)).toEqual([
      'AI is transforming healthcare',
      'Mental health awareness is rising',
      'Stock market trends in 2026',
    ]);
  });

  it('filters articles by topic', () => {
    const result = getVisibleArticles(articles, 'date-desc', 'finance', '');

    expect(result).toHaveLength(1);
    expect(result[0]?.topic).toBe('finance');
  });

  it('searches articles by title', () => {
    const result = getVisibleArticles(articles, 'date-desc', 'all', 'health');

    expect(result).toHaveLength(2);
    expect(result.map((article) => article.id)).toEqual(['1', '4']);
  });
});
