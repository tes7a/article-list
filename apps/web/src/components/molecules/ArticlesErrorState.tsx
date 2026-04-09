import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type ArticlesErrorStateProps = {
  message: string;
  onRetry: () => void;
};

export function ArticlesErrorState({ message, onRetry }: ArticlesErrorStateProps) {
  return (
    <Card className="border-rose-200 bg-rose-50 shadow-none">
      <CardHeader>
        <Badge variant="destructive" className="w-fit">
          Request failed
        </Badge>
        <CardTitle className="text-rose-950">Could not load articles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-6 text-rose-700">{message}</p>
        <Button variant="secondary" onClick={onRetry}>
          Retry request
        </Button>
      </CardContent>
    </Card>
  );
}
