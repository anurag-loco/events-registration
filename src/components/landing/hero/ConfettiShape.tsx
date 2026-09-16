import type { CSSProperties } from "react";
import type { ConfettiShape } from "../../types";

export function ConfettiShape({
  shape = "circle",
  size = 10,
  color = "#FF6B6B",
  style = {},
}: {
  shape?: ConfettiShape;
  size?: number;
  color?: string;
  style?: CSSProperties;
}) {
  if (shape === "circle") {
    return <div style={{ ...style, width: size, height: size, borderRadius: "50%", backgroundColor: color }} />;
  }
  if (shape === "square") {
    return <div style={{ ...style, width: size, height: size, borderRadius: 2, backgroundColor: color }} />;
  }
  if (shape === "line") {
    return <div style={{ ...style, width: size, height: size * 0.25, borderRadius: 99, backgroundColor: color }} />;
  }
  const half = size / 2;
  return (
    <div
      style={{
        ...style,
        width: 0,
        height: 0,
        borderLeft: `${half}px solid transparent`,
        borderRight: `${half}px solid transparent`,
        borderBottom: `${size * 0.85}px solid ${color}`,
        backgroundColor: "transparent",
      }}
    />
  );
}
