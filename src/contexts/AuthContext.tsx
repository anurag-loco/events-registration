import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase-ready";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: false,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const configured = isSupabaseConfigured();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(configured);
  const initialSessionResolved = useRef(false);

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }

    let mounted = true;
    const failOpen = () => {
      if (!mounted) return;
      initialSessionResolved.current = true;
      setLoading(false);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!mounted) return;
        if (event === "INITIAL_SESSION") return;
        setSession(session);
        if (initialSessionResolved.current) setLoading(false);
      }
    );

    const timeout = setTimeout(failOpen, 2500);

    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (!mounted) return;
        setSession(session);
        initialSessionResolved.current = true;
        setLoading(false);
      })
      .catch(failOpen);

    return () => {
      mounted = false;
      clearTimeout(timeout);
      subscription.unsubscribe();
    };
  }, [configured]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore — demo / unconfigured environments
    }
    setSession(null);
  };

  const value = { session, user: session?.user ?? null, loading, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
