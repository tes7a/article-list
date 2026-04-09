import { describe, expect, it, jest } from '@jest/globals';
import type { Response } from 'express';

import { articles, getArticlesHandler } from './app.js';

describe('getArticlesHandler', () => {
  it('returns the full articles list', () => {
    const json = jest.fn();
    const response = { json } as unknown as Response;

    getArticlesHandler({} as never, response);

    expect(json).toHaveBeenCalledWith(articles);
    expect(articles).toHaveLength(12);
    expect(articles[0]).toMatchObject({
      id: '1',
      title: 'AI is transforming healthcare',
      topic: 'technology',
      publishedAt: '2026-03-20T10:15:00Z',
    });
  });
});
