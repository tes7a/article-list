type PublishedDateProps = {
  value: string;
};

export function PublishedDate({ value }: PublishedDateProps) {
  return <time className="text-sm text-slate-500">{new Date(value).toLocaleDateString()}</time>;
}

