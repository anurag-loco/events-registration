export function CalendarMark() {
  return (
    <div className="drop-shadow-[0_18px_40px_hsl(240_30%_14%_/_0.18)]">
      <svg width="130" height="158" viewBox="0 0 130 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="28" width="110" height="120" rx="16" fill="hsl(var(--card))" />
        <rect x="10" y="28" width="110" height="32" rx="16" fill="hsl(var(--primary))" />
        <rect x="10" y="44" width="110" height="16" fill="hsl(var(--primary))" />
        <rect x="38" y="14" width="10" height="28" rx="5" fill="hsl(var(--foreground))" />
        <rect x="82" y="14" width="10" height="28" rx="5" fill="hsl(var(--foreground))" />
        {[0, 1, 2, 3, 4].map((col) =>
          [0, 1, 2, 3].map((row) => (
            <rect
              key={`${col}-${row}`}
              x={21 + col * 19}
              y={72 + row * 18}
              width="12"
              height="10"
              rx="2.5"
              fill={col === 3 && row === 2 ? "hsl(var(--primary))" : "hsl(var(--border))"}
            />
          )),
        )}
        <path d="M75 100L78 103L84 96" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
