import { apiInstance } from '@/dal/http/api-instance';
import { ApiRoute } from '@/lib/constants/api';

export type Article = {
  id: string;
  title: string;
  topic: string;
  publishedAt: string;
};

export async function getArticles() {
  const { data } = await apiInstance.get<Article[]>(ApiRoute.Articles);
  return data;
}
