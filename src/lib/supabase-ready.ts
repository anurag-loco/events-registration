/** True when a real Supabase project is configured. */
export function isSupabaseConfigured(): boolean {
  const url = String(import.meta.env.VITE_SUPABASE_URL || "");
  const key = String(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "");
  if (!url || !key) return false;
  if (url.includes("placeholder")) return false;
  try {
    return Boolean(new URL(url).hostname);
  } catch {
    return false;
  }
}

const QUERY_TIMEOUT_MS = 4000;

/** Run a query, but always resolve — with `fallback` if Supabase is missing, slow, or errors. */
export async function withFallback<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  if (!isSupabaseConfigured()) return fallback;
  try {
    const result = await Promise.race([
      fn(),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("query-timeout")), QUERY_TIMEOUT_MS);
      }),
    ]);
    return (result ?? fallback) as T;
  } catch {
    return fallback;
  }
}
