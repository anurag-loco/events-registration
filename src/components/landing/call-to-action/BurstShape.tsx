import type { BurstPiece } from "../types";

export function BurstShape({
  piece = { x: 0, y: 10, size: 12, color: "hsl(2 100% 70%)", shape: "circle", rot: 0 },
}: {
  piece?: BurstPiece;
}) {
  return (
    <div
      className="absolute"
      style={{ left: `calc(50% + ${piece.x}px)`, top: piece.y, transform: `rotate(${piece.rot}deg)` }}
    >
      {piece.shape === "circle" && (
        <div style={{ width: piece.size, height: piece.size, borderRadius: "50%", backgroundColor: piece.color }} />
      )}
      {piece.shape === "square" && (
        <div style={{ width: piece.size, height: piece.size, borderRadius: 2, backgroundColor: piece.color }} />
      )}
      {piece.shape === "triangle" && (
        <div style={{ width: 0, height: 0, borderLeft: `${piece.size / 2}px solid transparent`, borderRight: `${piece.size / 2}px solid transparent`, borderBottom: `${piece.size}px solid ${piece.color}` }} />
      )}
    </div>
  );
}
