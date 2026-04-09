function parseAllowedOrigins(value: string | undefined) {
  if (!value) {
    return ['http://localhost:3000'];
  }

  return value
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export function getPort() {
  return Number(process.env.PORT ?? 3001);
}

export function getAllowedOrigins() {
  return parseAllowedOrigins(process.env.CORS_ORIGIN);
}
