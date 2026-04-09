import { create } from 'zustand';

import { getArticles } from '@/dal/articles/articles.dal';
import type { AppState } from '@/store/app-store.types';
import { getTopics, getVisibleArticles } from '@/store/app-store.utils';

export const useAppStore = create<AppState>((set, get) => ({
  articles: [],
  visibleArticles: [],
  topics: [],
  searchQuery: '',
  sortOption: 'date-desc',
  topicFilter: 'all',
  isLoading: false,
  error: null,
  fetchArticles: async () => {
    set({ isLoading: true, error: null });

    try {
      const articles = await getArticles();
      const { sortOption, topicFilter, searchQuery } = get();

      set({
        articles,
        topics: getTopics(articles),
        visibleArticles: getVisibleArticles(articles, sortOption, topicFilter, searchQuery),
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false,
      });
    }
  },
  setSearchQuery: (searchQuery) => {
    const { articles, sortOption, topicFilter } = get();

    set({
      searchQuery,
      visibleArticles: getVisibleArticles(articles, sortOption, topicFilter, searchQuery),
    });
  },
  setSortOption: (sortOption) => {
    const { articles, topicFilter, searchQuery } = get();

    set({
      sortOption,
      visibleArticles: getVisibleArticles(articles, sortOption, topicFilter, searchQuery),
    });
  },
  setTopicFilter: (topicFilter) => {
    const { articles, sortOption, searchQuery } = get();

    set({
      topicFilter,
      visibleArticles: getVisibleArticles(articles, sortOption, topicFilter, searchQuery),
    });
  },
}));
