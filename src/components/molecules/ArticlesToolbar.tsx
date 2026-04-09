import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { SortOption, TopicFilter } from '@/store/app-store.types';

type ArticlesToolbarProps = {
  articlesCount: number;
  topics: string[];
  searchQuery: string;
  sortOption: SortOption;
  topicFilter: TopicFilter;
  onSearchChange: (searchQuery: string) => void;
  onSortChange: (sortOption: SortOption) => void;
  onTopicChange: (topicFilter: TopicFilter) => void;
};

export function ArticlesToolbar({
  articlesCount,
  topics,
  searchQuery,
  sortOption,
  topicFilter,
  onSearchChange,
  onSortChange,
  onTopicChange,
}: ArticlesToolbarProps) {
  return (
    <Card className="border-slate-200/80 bg-slate-50/85 shadow-none backdrop-blur">
      <CardHeader className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-slate-500">Display Articles</p>
          <CardTitle className="text-2xl">Browse the article feed</CardTitle>
        </div>
        <Badge variant="secondary" className="w-fit">
          {articlesCount} articles
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr_1fr]">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Search
            <Input
              placeholder="Search by title"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Sort by
            <Select value={sortOption} onValueChange={(value) => onSortChange(value as SortOption)}>
              <SelectTrigger>
                <SelectValue placeholder="Select sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Date (newest first)</SelectItem>
                <SelectItem value="title-asc">Title (A to Z)</SelectItem>
              </SelectContent>
            </Select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Filter by topic
            <Select value={topicFilter} onValueChange={(value) => onTopicChange(value as TopicFilter)}>
              <SelectTrigger>
                <SelectValue placeholder="Select topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All topics</SelectItem>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
        </div>
      </CardContent>
    </Card>
  );
}
