import { useMemo } from "react";
import neuronArt from "./assets/neuron-drawing.svg";
import { buildRegions } from "./regions";

// Dot color carries the category meaning that used to live in the
// artwork's line color — soma (amyloid orange), dendrites (GFAP red),
// axon/terminals (Iba1 green), notes (violet — the one category that
// isn't one of the four Imaris channels, since notes aren't a tissue
// structure; violet was the secondary accent color floated early on and
// never used, so it gets a real job here instead).
const DOT_COLORS = {
  soma: "#FF9E3D",
  dendrite: "#FF4D5E",
  axon: "#4DFF88",
  note: "#B14EFF",
};

function colorForRegion(region) {
  if (region.type === "about") return DOT_COLORS.soma;
  if (region.type.startsWith("note")) return DOT_COLORS.note;
  if (region.type.startsWith("project")) return DOT_COLORS.axon;
  return DOT_COLORS.dendrite; // experience / experience-overflow
}

function hexToRgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function RegionButton({ region, index, onActivate }) {
  // Deliberately de-synchronized: same animation on every node looks like
  // a CSS loop rather than something alive. Delay and duration both vary
  // by position so the pulses drift in and out of phase with each other.
  const delay = `${(index * 340) % 2600}ms`;
  const duration = `${2200 + ((index * 270) % 900)}ms`;

  const color = colorForRegion(region);
  const dotVars = {
    "--dot-color": color,
    "--dot-resting": hexToRgba(color, 0.7),
    "--dot-glow": hexToRgba(color, 0.55),
    animationDelay: delay,
    animationDuration: duration,
  };

  return (
    <button
      type="button"
      className="group absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--dot-color)] focus-visible:outline-offset-2"
      style={{ left: `${region.x}%`, top: `${region.y}%`, ...dotVars }}
      aria-label={region.label}
      onClick={(event) => onActivate(region, event.currentTarget)}
    >
      <span
        aria-hidden="true"
        className="neuron-hit-dot block w-3 h-3 rounded-full bg-[var(--dot-resting)] transition-[background-color,transform,box-shadow] duration-200 group-hover:bg-[var(--dot-color)] group-hover:scale-125 group-focus-visible:scale-125 group-hover:shadow-[0_0_12px_4px_var(--dot-glow)] group-focus-visible:shadow-[0_0_12px_4px_var(--dot-glow)]"
        style={dotVars}
      />
    </button>
  );
}

function Neuron({ projects, experienceItems, notesItems, onActivate }) {
  const regions = useMemo(
    () => buildRegions({ projects, experienceItems, notesItems }),
    [projects, experienceItems, notesItems]
  );

  return (
    <div className="relative w-full max-w-[1600px] aspect-[2285/1587]">
      <img
        src={neuronArt}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
      />
      {regions.map((region, index) => (
        <RegionButton
          key={region.id}
          region={region}
          index={index}
          onActivate={onActivate}
        />
      ))}
    </div>
  );
}

export default Neuron;
