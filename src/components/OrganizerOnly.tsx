import { useUserRole } from "@/hooks/useUserRole";
import { Navigate } from "react-router-dom";
import { isSupabaseConfigured } from "@/lib/supabase-ready";

/**
 * Restricts a route to users with organizer access. While the role is
 * resolving we render the page with defaults instead of a spinner.
 */
export function OrganizerOnly({ children = null }: { children?: React.ReactNode }) {
  const { role, loading } = useUserRole();
  if (!isSupabaseConfigured() || loading || !role) return <>{children}</>;
  if (role !== "organizer") return <Navigate to="/dashboard/home" replace />;
  return <>{children}</>;
}
