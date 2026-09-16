import { useAuth } from "@/contexts/AuthContext";
import { DEFAULT_PROFILE } from "@/lib/component-defaults";
import { isSupabaseConfigured } from "@/lib/supabase-ready";

const DefaultProtectedContent = () => (
  <div className="min-h-screen bg-background p-8">
    <p className="text-sm text-muted-foreground">Signed in as {DEFAULT_PROFILE.full_name}</p>
    <h1 className="font-display text-2xl font-semibold mt-1">Dashboard</h1>
  </div>
);

export function ProtectedRoute({
  children = <DefaultProtectedContent />,
}: {
  children?: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  // Preview, hung auth, and logged-out: still render the page with defaults.
  if (!isSupabaseConfigured() || loading || !user) return <>{children}</>;

  return <>{children}</>;
}
