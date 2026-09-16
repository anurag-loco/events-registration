import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { isSupabaseConfigured, withFallback } from "@/lib/supabase-ready";

export function useIsAdmin() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(() =>
    isSupabaseConfigured() ? null : true
  );

  useEffect(() => {
    let active = true;
    if (!isSupabaseConfigured()) {
      setIsAdmin(true);
      return;
    }
    if (!user) {
      setIsAdmin(false);
      return;
    }
    (async () => {
      const admin = await withFallback(async () => {
        const { data } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin")
          .maybeSingle();
        return !!data;
      }, true);
      if (active) setIsAdmin(admin);
    })();
    return () => {
      active = false;
    };
  }, [user]);

  return isAdmin;
}
