import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables, Json } from "@/integrations/supabase/types";
import { useAuth } from "@/contexts/AuthContext";
import { withFallback } from "@/lib/supabase-ready";
import { DEFAULT_REGISTRATIONS, DEFAULT_STATS } from "@/lib/component-defaults";


export type Registration = Tables<"registrations"> & {
  events?: { name: string } | null;
};

export type RegStatus = "registered" | "checked_in" | "attended" | "no_show" | "cancelled" | "waitlisted";

export function useRegistrations() {
  return useQuery({
    queryKey: ["registrations"],
    queryFn: () =>
      withFallback(async () => {
        const { data, error } = await supabase
          .from("registrations")
          .select("*, events(name)")
          .order("created_at", { ascending: false })
          .limit(2000);
        if (error) throw error;
        return data as Registration[];
      }, DEFAULT_REGISTRATIONS),
    placeholderData: DEFAULT_REGISTRATIONS,
  });
}

export function useRegistrationsByEvent(eventId: string | undefined) {
  return useQuery({
    queryKey: ["registrations", eventId],
    queryFn: () =>
      withFallback(async () => {
        const { data, error } = await supabase
          .from("registrations")
          .select("*")
          .eq("event_id", eventId!)
          .order("created_at", { ascending: false })
          .limit(5000);
        if (error) throw error;
        return data as Tables<"registrations">[];
      }, DEFAULT_REGISTRATIONS),
    placeholderData: DEFAULT_REGISTRATIONS,
  });
}

export function useCreateRegistration() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ event_id, data, utm }: { event_id: string; data: Record<string, string>; utm?: Record<string, any> | null }) => {
      const { data: result, error } = await supabase
        .rpc("register_for_event", {
          p_event_id: event_id,
          p_data: data as unknown as Json,
          p_utm: (utm ?? null) as unknown as Json,
        });
      if (error) throw error;
      // RPC returns jsonb: { id, status, waitlisted }
      return result as unknown as { id: string; status: RegStatus; waitlisted: boolean };
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["registrations"] }),
  });
}

export function useUpdateRegistration() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...patch }: { id: string; status?: RegStatus; is_vip?: boolean; notes?: string; checked_in_at?: string | null }) => {
      const { error } = await supabase.from("registrations").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["registrations"] });
      qc.invalidateQueries({ queryKey: ["registration-stats"] });
    },
  });
}

export function usePromoteFromWaitlist() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (registration_id: string) => {
      const { error } = await supabase.rpc("promote_from_waitlist", { p_registration_id: registration_id });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["registrations"] }),
  });
}

export function useRegistrationStats() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["registration-stats", user?.id],
    queryFn: () => {
      if (!user) return Promise.resolve(DEFAULT_STATS);
      return withFallback(async () => {
        const { data: events, error: eventsError } = await supabase
          .from("events")
          .select("id, name, status")
          .eq("user_id", user.id);
        if (eventsError) throw eventsError;

        const eventIds = (events ?? []).map((e) => e.id);

        let registrations: { created_at: string; event_id: string; status: string }[] = [];
        if (eventIds.length > 0) {
          const { data, error } = await supabase
            .from("registrations")
            .select("created_at, event_id, status")
            .in("event_id", eventIds);
          if (error) throw error;
          registrations = (data ?? []) as typeof registrations;
        }

        const total = registrations.length;
        const activeEvents = events?.filter(e => e.status === "live").length ?? 0;

        const byMonth: Record<string, number> = {};
        registrations.forEach(r => {
          const month = new Date(r.created_at).toLocaleString("default", { month: "short" });
          byMonth[month] = (byMonth[month] || 0) + 1;
        });

        const chartData = Object.entries(byMonth).map(([date, registrations]) => ({ date, registrations }));

        return { total, activeEvents, chartData, registrations, events };
      }, DEFAULT_STATS);
    },
    placeholderData: DEFAULT_STATS,
  });
}

