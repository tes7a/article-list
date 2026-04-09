function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '');
}

export function getApiBaseUrl() {
  const value = import.meta.env.VITE_API_URL?.trim();

  if (!value) {
    return '';
  }

  return trimTrailingSlash(value);
}
