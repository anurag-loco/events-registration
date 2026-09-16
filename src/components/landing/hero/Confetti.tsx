import { CONFETTI_COLORS, CONFETTI_SHAPES, CORNER_SEEDS } from "../constants";
import { ConfettiShape } from "./ConfettiShape";

const CORNERS = [
  { side: "left" as const, vSide: "top" as const },
  { side: "left" as const, vSide: "bottom" as const },
  { side: "right" as const, vSide: "top" as const },
  { side: "right" as const, vSide: "bottom" as const },
];

export function Confetti({
  size = 2.5,
  opacity = 0.8,
  count = 8,
  spread = 1,
}: {
  size?: number;
  opacity?: number;
  count?: number;
  spread?: number;
}) {
  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {CORNERS.map((corner, ci) =>
        CORNER_SEEDS[ci].slice(0, count).map((seed, si) => {
          const pieceSize = seed.baseSize * size;
          const finalX = seed.x * spread;
          const finalY = seed.y * spread;
          return (
            <ConfettiShape
              key={`${ci}-${si}`}
              shape={CONFETTI_SHAPES[seed.shape % CONFETTI_SHAPES.length]}
              size={pieceSize}
              color={CONFETTI_COLORS[seed.color % CONFETTI_COLORS.length]}
              style={{
                position: "absolute",
                [corner.side]: finalX,
                [corner.vSide]: finalY < 0 ? Math.abs(finalY) : finalY,
                opacity,
                transform: `rotate(${seed.rot}deg)`,
              }}
            />
          );
        })
      )}
    </div>
  );
}
