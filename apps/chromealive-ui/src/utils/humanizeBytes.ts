export default function humanizeBytes(bytes: number): string {
  if (!bytes) return '0KB';

  if (bytes < 512) {
    return `${bytes}B`;
  }

  const kb = bytes / 1024;

  if (kb > 1024) {
    const mb = kb / 1024;
    return `${Math.round(mb * 10) / 10}MB`;
  }
  return `${Math.round(kb * 10) / 10}KB`;
}
