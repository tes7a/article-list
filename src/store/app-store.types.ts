import type { Article } from '@/dal/articles/articles.dal';

export type SortOption = 'date-desc' | 'title-asc';
export type TopicFilter = Article['topic'] | 'all';

export type AppState = {
  articles: Article[];
  visibleArticles: Article[];
  topics: string[];
  searchQuery: string;
  sortOption: SortOption;
  topicFilter: TopicFilter;
  isLoading: boolean;
  error: string | null;
  fetchArticles: () => Promise<void>;
  setSearchQuery: (searchQuery: string) => void;
  setSortOption: (sortOption: SortOption) => void;
  setTopicFilter: (topicFilter: TopicFilter) => void;
};
