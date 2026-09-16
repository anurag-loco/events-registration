import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Tables, TablesUpdate } from "@/integrations/supabase/types";
import { withFallback } from "@/lib/supabase-ready";
import { DEFAULT_PROFILE } from "@/lib/component-defaults";

export type Profile = Tables<"profiles">;

export function useProfile() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["profile", user?.id],
    queryFn: () => {
      if (!user) return Promise.resolve(DEFAULT_PROFILE);
      return withFallback(async () => {
        const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();
        if (error) throw error;
        return data as Profile;
      }, DEFAULT_PROFILE);
    },
    placeholderData: DEFAULT_PROFILE,
  });
}

export function useUpdateProfile() {
  const qc = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: async (updates: TablesUpdate<"profiles">) => {
      const { data, error } = await supabase
        .from("profiles")
        .upsert({ id: user!.id, ...updates }, { onConflict: "id" })
        .select()
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profile"] }),
  });
}
