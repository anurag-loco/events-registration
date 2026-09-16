import { ChevronDown, ChevronUp } from "lucide-react";
import { BENTO_PRESETS, FONT_WEIGHT_OPTIONS } from "./constants";

function DevSlider({
  label = "",
  display = "",
  min = 0,
  max = 1,
  step = 0.1,
  value = 0,
  onChange = () => {},
}: {
  label?: string;
  display?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">{label}</span>
        <span className="text-[11px] text-muted-foreground w-8 text-right">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 accent-primary"
      />
    </>
  );
}

export function DevPanel({
  open = false,
  onOpenChange = () => {},
  titleWeight = 700,
  onTitleWeightChange = () => {},
  bentoStyle = 0,
  onBentoStyleChange = () => {},
  confettiSize = 2.5,
  onConfettiSizeChange = () => {},
  confettiOpacity = 0.8,
  onConfettiOpacityChange = () => {},
  confettiCount = 8,
  onConfettiCountChange = () => {},
  confettiSpread = 1,
  onConfettiSpreadChange = () => {},
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  titleWeight?: number;
  onTitleWeightChange?: (weight: number) => void;
  bentoStyle?: number;
  onBentoStyleChange?: (index: number) => void;
  confettiSize?: number;
  onConfettiSizeChange?: (value: number) => void;
  confettiOpacity?: number;
  onConfettiOpacityChange?: (value: number) => void;
  confettiCount?: number;
  onConfettiCountChange?: (value: number) => void;
  confettiSpread?: number;
  onConfettiSpreadChange?: (value: number) => void;
}) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[9999]">
      <button
        onClick={() => onOpenChange(!open)}
        className="mx-auto flex items-center gap-1.5 bg-foreground text-background text-xs font-medium px-4 py-1.5 rounded-t-lg shadow-lg"
      >
        🎨 Dev tools {open ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
      </button>
      {open && (
        <div className="bg-card border border-border rounded-t-xl shadow-2xl p-4 w-[340px] space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Title font weight</label>
            <select
              value={titleWeight}
              onChange={(e) => onTitleWeightChange(Number(e.target.value))}
              className="w-full text-sm bg-background border border-input rounded-lg px-3 py-2 text-foreground"
            >
              {FONT_WEIGHT_OPTIONS.map((f) => (
                <option key={f.value} value={f.value}>{f.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Bento colour style</label>
            <div className="flex gap-1.5">
              {BENTO_PRESETS.map((preset, idx) => (
                <button
                  key={preset.label}
                  onClick={() => onBentoStyleChange(idx)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${bentoStyle === idx ? "bg-primary text-primary-foreground border-primary" : "bg-background border-input text-foreground hover:bg-muted"}`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-xs font-medium text-muted-foreground">Confetti visible</span>
            <input type="checkbox" checked={confettiCount > 0} onChange={(e) => onConfettiCountChange(e.target.checked ? 6 : 0)} className="accent-primary w-4 h-4" />
          </label>
          <div className="border-t border-border pt-3 space-y-2">
            <label className="text-xs font-medium text-muted-foreground block">Confetti</label>
            <div className="space-y-1.5">
              <DevSlider label="Size" display={confettiSize.toFixed(1)} min={0.3} max={2.5} step={0.1} value={confettiSize} onChange={onConfettiSizeChange} />
              <DevSlider label="Boldness" display={`${Math.round(confettiOpacity * 100)}%`} min={0.1} max={1} step={0.05} value={confettiOpacity} onChange={onConfettiOpacityChange} />
              <DevSlider label="Amount" display={String(confettiCount)} min={1} max={8} step={1} value={confettiCount} onChange={onConfettiCountChange} />
              <DevSlider label="Spread" display={confettiSpread.toFixed(1)} min={0.5} max={2} step={0.1} value={confettiSpread} onChange={onConfettiSpreadChange} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
