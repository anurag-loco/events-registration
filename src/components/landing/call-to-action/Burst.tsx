import { BURST_PIECES } from "../constants";
import { BurstShape } from "./BurstShape";

export function Burst() {
  return (
    <div className="absolute inset-x-0 top-5 flex justify-center pointer-events-none" aria-hidden="true">
      {BURST_PIECES.map((piece, i) => (
        <BurstShape key={i} piece={piece} />
      ))}
    </div>
  );
}
