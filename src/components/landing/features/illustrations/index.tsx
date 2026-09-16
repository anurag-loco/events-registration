import { BarChart2, Puzzle } from "lucide-react";
import eventSummit from "@/assets/event-vibe-coding-summit.jpg";
import { ATTENDEE_AVATARS, INTEGRATION_LOGOS } from "../../constants";
import type { BentoAccents } from "../../types";

const DEFAULT_ACCENTS: BentoAccents = {
  integrationCircle: "hsl(45,80%,45%)",
  attendeeBorder: "hsl(250,60%,80%)",
  analyticsBars: "hsl(170,60%,50%)",
  analyticsAccent: "hsl(170,60%,40%)",
  pageButton: "hsl(340,75%,58%)",
};

export function PagePreview({ accents = DEFAULT_ACCENTS }: { accents?: BentoAccents }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="w-[85%] bg-white/80 rounded-xl shadow-lg overflow-hidden">
        <img src={eventSummit} alt="Event page preview" className="w-full h-28 object-cover" />
        <div className="p-3 space-y-2.5">
          <h4 className="text-[11px] font-bold text-foreground truncate">Vibe coding summit 2026</h4>
          <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
            <span>📅 Apr 19, 2026</span>
            <span>📍 San Francisco</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-muted-foreground w-12">Name</span>
              <div className="h-5 bg-muted rounded-md flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-muted-foreground w-12">Email</span>
              <div className="h-5 bg-muted rounded-md flex-1" />
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <div className="h-7 rounded-full flex-1 flex items-center justify-center" style={{ backgroundColor: accents.pageButton }}>
              <span className="text-[9px] text-white font-semibold">Register now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LiveChart({ accents = DEFAULT_ACCENTS }: { accents?: BentoAccents }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="w-[85%] bg-white/80 rounded-xl shadow-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <BarChartLive accents={accents} />
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {[40, 65, 30, 55, 80, 45, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, backgroundColor: accents.analyticsBars }} />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d} className="text-[7px] text-muted-foreground flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BarChartLive({ accents = DEFAULT_ACCENTS }: { accents?: BentoAccents }) {
  return (
    <>
      <BarChart2 className="w-4 h-4" style={{ color: accents.analyticsAccent }} />
      <span className="text-[10px] font-bold" style={{ color: accents.analyticsAccent }}>Live</span>
      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accents.analyticsBars }} />
    </>
  );
}

export function IntegrationOrbit({ accents = DEFAULT_ACCENTS }: { accents?: BentoAccents }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="w-16 h-16 rounded-full flex items-center justify-center z-10" style={{ backgroundColor: accents.integrationCircle }}>
        <Puzzle className="w-8 h-8 text-white" />
      </div>
      {INTEGRATION_LOGOS.map((logo, i) => {
        const angle = (i * 60 - 90) * Math.PI / 180;
        const r = 85;
        return (
          <div key={logo.name} className="absolute w-14 h-14 rounded-xl bg-white/80 shadow-md flex items-center justify-center" style={{ left: `calc(50% + ${Math.cos(angle) * r}px - 28px)`, top: `calc(50% + ${Math.sin(angle) * r}px - 28px)` }}>
            <img src={logo.src} alt={logo.name} className="w-8 h-8" />
          </div>
        );
      })}
    </div>
  );
}

export function AttendeeGrid({ accents = DEFAULT_ACCENTS }: { accents?: BentoAccents }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="grid grid-cols-3 gap-4">
        {ATTENDEE_AVATARS.map((url, i) => (
          <div key={url} className="w-16 h-16 rounded-full overflow-hidden shadow-md border-[3px]" style={{ borderColor: accents.attendeeBorder }}>
            <img src={url} alt={`Attendee ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export const FEATURE_PREVIEWS = [PagePreview, LiveChart, IntegrationOrbit, AttendeeGrid];
