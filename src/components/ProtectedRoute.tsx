import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { isSupabaseConfigured } from "@/lib/supabase-ready";

export function ProtectedRoute({ children = null }: { children?: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Preview / unconfigured: let every page render with demo data.
  if (!isSupabaseConfigured()) return <>{children}</>;

  // Don't block the tree on a hung auth call — pages have their own fallbacks.
  if (loading) return <>{children}</>;

  if (!user) {
    const redirectTarget = `${location.pathname}${location.search}${location.hash}`;
    return (
      <Navigate
        to={`/auth?redirect=${encodeURIComponent(redirectTarget)}`}
        replace
      />
    );
  }

  return <>{children}</>;
}
