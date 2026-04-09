import { ArticleCard } from '@/components/molecules/ArticleCard';
import { ArticlesErrorState } from '@/components/molecules/ArticlesErrorState';
import { ArticlesLoadingState } from '@/components/molecules/ArticlesLoadingState';
import { ArticlesToolbar } from '@/components/molecules/ArticlesToolbar';
import type { Article } from '@/dal/articles/articles.dal';
import type { SortOption, TopicFilter } from '@/store/app-store.types';

type ArticlesListSectionProps = {
  articles: Article[];
  topics: string[];
  searchQuery: string;
  sortOption: SortOption;
  topicFilter: TopicFilter;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  onSearchChange: (searchQuery: string) => void;
  onSortChange: (sortOption: SortOption) => void;
  onTopicChange: (topicFilter: TopicFilter) => void;
};

export function ArticlesListSection({
  articles,
  topics,
  searchQuery,
  sortOption,
  topicFilter,
  isLoading,
  error,
  onRetry,
  onSearchChange,
  onSortChange,
  onTopicChange,
}: ArticlesListSectionProps) {
  return (
    <section className="space-y-4">
      <div className="sticky top-0 z-30">
        <ArticlesToolbar
          articlesCount={articles.length}
          topics={topics}
          searchQuery={searchQuery}
          sortOption={sortOption}
          topicFilter={topicFilter}
          onSearchChange={onSearchChange}
          onSortChange={onSortChange}
          onTopicChange={onTopicChange}
        />
      </div>

      {isLoading ? <ArticlesLoadingState /> : null}
      {error ? <ArticlesErrorState message={error} onRetry={onRetry} /> : null}

      {!isLoading && !error ? (
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
