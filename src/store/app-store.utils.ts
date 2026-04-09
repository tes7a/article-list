import type { Article } from '@/dal/articles/articles.dal';
import type { SortOption, TopicFilter } from '@/store/app-store.types';

export function searchArticles(articles: Article[], searchQuery: string) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return articles;
  }

  return articles.filter((article) => article.title.toLowerCase().includes(normalizedQuery));
}

export function sortArticles(articles: Article[], sortOption: SortOption) {
  const sorted = [...articles];

  if (sortOption === 'title-asc') {
    sorted.sort((left, right) => left.title.localeCompare(right.title));
    return sorted;
  }

  sorted.sort((left, right) => {
    return new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime();
  });

  return sorted;
}

export function filterArticles(articles: Article[], topicFilter: TopicFilter) {
  if (topicFilter === 'all') {
    return articles;
  }

  return articles.filter((article) => article.topic === topicFilter);
}

export function getVisibleArticles(
  articles: Article[],
  sortOption: SortOption,
  topicFilter: TopicFilter,
  searchQuery: string,
) {
  return sortArticles(searchArticles(filterArticles(articles, topicFilter), searchQuery), sortOption);
}

export function getTopics(articles: Article[]) {
  return Array.from(new Set(articles.map((article) => article.topic))).sort();
}
