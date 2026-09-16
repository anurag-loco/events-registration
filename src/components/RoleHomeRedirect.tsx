import { useUserRole } from "@/hooks/useUserRole";
import { Navigate } from "react-router-dom";
import { isSupabaseConfigured } from "@/lib/supabase-ready";

/**
 * Sends the user to the organizer dashboard if they own/cohost any events,
 * otherwise to the attendee home. Defaults to the organizer events page.
 */
export function RoleHomeRedirect() {
  const { role, loading } = useUserRole();
  if (!isSupabaseConfigured() || loading || !role) {
    return <Navigate to="/dashboard/events" replace />;
  }
  if (role === "organizer") return <Navigate to="/dashboard/events" replace />;
  return <Navigate to="/dashboard/home" replace />;
}
