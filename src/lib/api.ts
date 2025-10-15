export const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function fetcher<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Network error: ${res.status} ${res.statusText} ${text}`);
  }
  return res.json();
}