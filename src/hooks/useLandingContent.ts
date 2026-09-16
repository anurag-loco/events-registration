import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  LANDING_DEFAULTS,
  type LandingContentMap,
  type LandingSectionKey,
} from "@/lib/landing-defaults";
import { withFallback } from "@/lib/supabase-ready";
import { DEFAULT_LANDING } from "@/lib/component-defaults";

export interface LandingSectionRow {
  section_key: LandingSectionKey;
  content: any;
  assets: { url: string; role?: string }[];
  updated_at: string;
}

export function useLandingContent() {
  return useQuery({
    queryKey: ["landing-sections"],
    queryFn: () =>
      withFallback(async () => {
        const { data, error } = await supabase
          .from("landing_sections")
          .select("section_key, content, assets, updated_at");
        if (error) throw error;

        const content = { ...LANDING_DEFAULTS } as LandingContentMap;
        const assets = {
          hero: [],
          popular_events: [],
          features: [],
          testimonials: [],
          cta: [],
        } as Record<LandingSectionKey, { url: string; role?: string }[]>;

        for (const row of (data ?? []) as any[]) {
          const key = row.section_key as LandingSectionKey;
          if (key in content && row.content && Object.keys(row.content).length > 0) {
            (content as any)[key] = { ...(content as any)[key], ...row.content };
          }
          if (key in assets && Array.isArray(row.assets)) {
            assets[key] = row.assets;
          }
        }

        return { content, assets };
      }, DEFAULT_LANDING),
    placeholderData: DEFAULT_LANDING,
    staleTime: 30_000,
  });
}
