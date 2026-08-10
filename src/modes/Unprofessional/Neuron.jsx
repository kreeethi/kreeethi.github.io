import { useMemo } from "react";
import neuronArt from "./assets/neuron-placeholder.svg";
import { buildRegions } from "./regions";

function RegionButton({ region, index, onActivate }) {
  // Deliberately de-synchronized: same animation on every node looks like
  // a CSS loop rather than something alive. Delay and duration both vary
  // by position so the pulses drift in and out of phase with each other.
  const delay = `${(index * 340) % 2600}ms`;
  const duration = `${2200 + ((index * 270) % 900)}ms`;

  return (
    <button
      type="button"
      className="group absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF9E3D] focus-visible:outline-offset-2"
      style={{ left: `${region.x}%`, top: `${region.y}%` }}
      aria-label={region.label}
      onClick={(event) => onActivate(region, event.currentTarget)}
    >
      <span
        aria-hidden="true"
        className="neuron-hit-dot block w-3 h-3 rounded-full bg-[#FF9E3D]/70 transition-[transform,box-shadow] duration-200 group-hover:bg-[#FF9E3D] group-hover:scale-125 group-focus-visible:scale-125 group-hover:shadow-[0_0_12px_4px_rgba(255,158,61,0.55)] group-focus-visible:shadow-[0_0_12px_4px_rgba(255,158,61,0.55)]"
        style={{ animationDelay: delay, animationDuration: duration }}
      />
    </button>
  );
}

function Neuron({ projects, experienceItems, onActivate }) {
  const regions = useMemo(
    () => buildRegions({ projects, experienceItems }),
    [projects, experienceItems]
  );

  return (
    <div className="relative w-full max-w-3xl aspect-[2/1]">
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

