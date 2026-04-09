import { PublishedDate } from '@/components/atoms/PublishedDate';
import { TopicBadge } from '@/components/atoms/TopicBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Article } from '@/dal/articles/articles.dal';

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="h-full border-slate-200 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(248,250,252,1)_100%)] transition-transform duration-200 hover:-translate-y-1">
      <CardHeader className="min-h-36 justify-between">
        <TopicBadge topic={article.topic} />
        <CardTitle>{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="mt-auto">
        <PublishedDate value={article.publishedAt} />
      </CardContent>
    </Card>
  );
}
