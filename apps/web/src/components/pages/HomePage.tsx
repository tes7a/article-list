import { useEffect } from 'react';

import { ArticlesListSection } from '@/components/organisms/ArticlesListSection';
import { ArticlesPageLayout } from '@/components/templates/ArticlesPageLayout';
import { useAppStore } from '@/store/use-app-store';

export function HomePage() {
  const {
    visibleArticles,
    topics,
    searchQuery,
    sortOption,
    topicFilter,
    isLoading,
    error,
    fetchArticles,
    setSearchQuery,
    setSortOption,
    setTopicFilter,
  } = useAppStore();

  useEffect(() => {
    void fetchArticles();
  }, [fetchArticles]);

  return (
    <ArticlesPageLayout>
      <ArticlesListSection
        articles={visibleArticles}
        topics={topics}
        searchQuery={searchQuery}
        sortOption={sortOption}
        topicFilter={topicFilter}
        isLoading={isLoading}
        error={error}
        onRetry={() => void fetchArticles()}
        onSearchChange={setSearchQuery}
        onSortChange={setSortOption}
        onTopicChange={setTopicFilter}
      />
    </ArticlesPageLayout>
  );
}
