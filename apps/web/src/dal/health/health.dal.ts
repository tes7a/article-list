import { apiInstance } from '@/dal/http/api-instance';
import { ApiRoute } from '@/lib/constants/api';

export type HealthResponse = {
  message: string;
  timestamp: string;
};

export async function getHealth() {
  const { data } = await apiInstance.get<HealthResponse>(ApiRoute.Health);
  return data;
}
