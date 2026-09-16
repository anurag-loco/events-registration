import { Calendar, MapPin, Video, Globe, ArrowRight } from "lucide-react";

interface TemplatePreviewProps {
  template?: string;
  eventName?: string;
  description?: string;
  startDate?: string;
  startTime?: string;
  locationType?: "virtual" | "physical" | "hybrid";
  locationValue?: string;
  locationAddress?: string;
  flyerUrl?: string | null;
  colorMode?: "light" | "dark";
}

const TemplatePreview = ({
  template = "split",
  eventName = "Summer Showcase",
  description = "Join us for an evening worth remembering.",
  startDate = "Sat, Oct 12",
  startTime = "6:00 PM",
  locationType = "physical",
  locationValue = "Brooklyn, NY",
  locationAddress = "Brooklyn, NY",
  flyerUrl = null,
  colorMode = "dark",
}: TemplatePreviewProps) => {
  const light = colorMode === "light";
  const background = light ? "#fff" : "#1d1d1f";
  const foreground = light ? "#19192e" : "#f7f7f8";
  const muted = light ? "#555563" : "#b8b8c2";
  const border = light ? "#e5e5e8" : "#44444b";
  const locationLabel = locationValue || locationAddress || locationType;

  return (
    <div
      data-template={template}
      style={{
        boxSizing: "border-box",
        width: "100%",
        minHeight: 240,
        overflow: "hidden",
        background,
        color: foreground,
        fontFamily: "DM Sans, system-ui, sans-serif",
        padding: 20,
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) 150px",
        gap: 20,
        alignItems: "center",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {flyerUrl && (
            <img
              src={flyerUrl}
              alt="Event flyer"
              style={{ width: 72, height: 72, flex: "0 0 auto", borderRadius: 6, objectFit: "cover" }}
            />
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.02, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {eventName}
            </div>
            <p style={{ fontSize: 10, color: muted, lineHeight: 1.35, margin: "7px 0 0", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {description}
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gap: 6, color: muted, fontSize: 9, marginTop: 14 }}>
          {startDate && <span style={{ display: "flex", gap: 5, alignItems: "center" }}><Calendar size={11} />{startDate} {startTime}</span>}
          {locationType && <span style={{ display: "flex", gap: 5, alignItems: "center" }}>{locationType === "virtual" ? <Video size={11} /> : locationType === "physical" ? <MapPin size={11} /> : <Globe size={11} />}<span>{locationLabel}</span></span>}
        </div>
      </div>

      <div style={{ minWidth: 0, background: light ? "#f7f7f8" : "#27272a", border: `1px solid ${border}`, borderRadius: 8, padding: 12, boxShadow: "0 8px 24px rgba(0,0,0,.18)" }}>
        <div style={{ fontSize: 9, fontWeight: 800, marginBottom: 8 }}>Registration</div>
        {["Name", "Email", "Company"].map((field) => (
          <div key={field} style={{ marginBottom: 6 }}>
            <div style={{ fontSize: 8, color: muted, marginBottom: 2 }}>{field}</div>
            <div style={{ height: 16, border: `1px solid ${border}`, borderRadius: 4, background }} />
          </div>
        ))}
        <button style={{ height: 24, width: "100%", border: 0, borderRadius: 6, background: "#e33d75", color: "#fff", fontWeight: 700, fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          Register <ArrowRight size={10} />
        </button>
      </div>
    </div>
  );
};

export default TemplatePreview;
