import { useRef, useState } from "react";
import Neuron from "./Neuron";
import ContentPanel from "./ContentPanel";
import { projects } from "../../data/projects";
import { experienceItems } from "../../data/experience";
import { notesItems } from "../../data/notes";

function Unprofessional({ onExit }) {
  const [activeRegion, setActiveRegion] = useState(null);
  const triggerRef = useRef(null);

  function handleActivate(region, triggerEl) {
    triggerRef.current = triggerEl;
    setActiveRegion(region);
  }

  function handleClose() {
    setActiveRegion(null);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 flex flex-col">
      {/* Small bits of motion CSS scoped to this mode — same inline-style
          pattern the Professional mode already uses for its scrollbar
          hiding, kept consistent rather than introducing a new approach. */}
      <style>{`
        @keyframes neuron-pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        .neuron-hit-dot {
          animation: neuron-pulse 2.4s ease-in-out infinite;
        }
        @keyframes panel-enter {
          from { opacity: 0; transform: scale(0.97) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .panel-enter {
          animation: panel-enter 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes neuron-particle-drift {
          0%   { transform: translate(-50%, -50%) translate(0, 0); opacity: 0.25; }
          25%  { opacity: 0.7; }
          50%  { transform: translate(-50%, -50%) translate(6px, -8px); opacity: 0.4; }
          75%  { opacity: 0.7; }
          100% { transform: translate(-50%, -50%) translate(0, 0); opacity: 0.25; }
        }
        .neuron-particle {
          animation-name: neuron-particle-drift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .neuron-hit-dot,
          .panel-enter,
          .neuron-particle {
            animation: none;
          }
        }
      `}</style>

      <header className="flex flex-wrap items-center justify-between gap-4 px-4 md:px-8 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#FF9E3D]/80">
            Neuron Mode
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Click a part of the neuron to explore.
          </p>
        </div>
        <button
          type="button"
          onClick={onExit}
          className="text-sm px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 transition-colors"
        >
          ← Back to Professional Mode
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pb-10">
        <Neuron
          projects={projects}
          experienceItems={experienceItems}
          notesItems={notesItems}
          onActivate={handleActivate}
        />
      </main>

      <ContentPanel
        region={activeRegion}
        projects={projects}
        experienceItems={experienceItems}
        notesItems={notesItems}
        onClose={handleClose}
        triggerRef={triggerRef}
      />
    </div>
  );
}

export default Unprofessional;
