import type { PropsWithChildren } from 'react';

export function ArticlesPageLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#eef4f8_100%)] px-4 py-4 text-foreground sm:px-6 lg:px-8">
      <div className="w-full">{children}</div>
    </main>
  );
}
