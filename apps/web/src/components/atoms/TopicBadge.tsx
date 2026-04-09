import { Badge } from '@/components/ui/badge';

type TopicBadgeProps = {
  topic: string;
};

export function TopicBadge({ topic }: TopicBadgeProps) {
  return <Badge className="w-fit">{topic}</Badge>;
}
