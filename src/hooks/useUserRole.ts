import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { withFallback } from "@/lib/supabase-ready";

export type UserRole = "organizer" | "attendee";

/**
 * Returns whether the current user has organizer access (owns or co-hosts any event).
 * Used to decide between the organizer dashboard and the attendee home.
 * Defaults to organizer so dashboard pages can render without a live backend.
 */
export function useUserRole() {
  const { user, loading: authLoading } = useAuth();

  const query = useQuery({
    queryKey: ["user-role", user?.id],
    staleTime: 5 * 60 * 1000,
    queryFn: (): Promise<UserRole> => {
      if (!user) return Promise.resolve("organizer");
      return withFallback(async () => {
        const { data, error } = await supabase.rpc("has_any_organizer_access" as any, {
          _user_id: user.id,
        });
        if (error) throw error;
        return data ? "organizer" : "attendee";
      }, "organizer");
    },
    placeholderData: "organizer",
  });

  return {
    role: query.data ?? "organizer",
    isOrganizer: (query.data ?? "organizer") === "organizer",
    isAttendee: query.data === "attendee",
    loading: authLoading && !query.data,
  };
}
