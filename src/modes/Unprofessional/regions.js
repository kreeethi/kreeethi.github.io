// Fixed anchor points on the neuron artwork, given as percentages of the
// SVG's width/height. These were found programmatically (not eyeballed)
// by scanning the rendered artwork for leftmost/rightmost/topmost/
// bottommost colored pixels in each region, then verified with a visual
// overlay — see the conversation history for the exact method if the
// artwork changes and these need re-deriving. Coordinates are tied to
// the current artwork (src/modes/Unprofessional/assets/neuron-drawing.svg,
// viewBox aspect ~1.44:1) and are intentionally decoupled from its path
// data — hit areas are simple invisible buttons overlaid on top of the
// image, not the SVG shapes themselves.

const SOMA = { id: "soma", x: 33.0, y: 46.4 };

// Real axons don't usually branch along the shaft, but they do branch at
// the terminal into multiple boutons — so a fixed number of terminal
// slots is anatomically reasonable, not just a UI convenience. Six is a
// generous count relative to today's 5 projects, so growth mostly just
// fills in an already-drawn structure.
const AXON_TERMINALS = [
  { id: "axon-1", x: 97.8, y: 26.5 },
  { id: "axon-2", x: 95.6, y: 47.8 },
  { id: "axon-3", x: 98.0, y: 68.2 },
  { id: "axon-4", x: 87.8, y: 59.4 },
  { id: "axon-5", x: 84.2, y: 82.3 },
  { id: "axon-6", x: 77.8, y: 62.9 },
  { id: "axon-7", x: 73.3, y: 65.7 },
  { id: "axon-8", x: 70.9, y: 68.2 },
  { id: "axon-9", x: 68.5, y: 66.6 },
  { id: "axon-10", x: 65.4, y: 85.8 },
  {id: "axon-11", x: 97.5, y: 14.2 },
];

// Dendrite trunks stay a smaller fixed count (experience/research grows
// more slowly than projects). Fine branching in the artwork is purely
// decorative and isn't represented here at all.
const DENDRITE_TRUNKS = [
  { id: "dendrite-1", x: 3.4, y: 6.4 },
  { id: "dendrite-2", x: 1.8, y: 36 },
  { id: "dendrite-3", x: 3.7, y: 53 },
  { id: "dendrite-4", x: 2.9, y: 86 },
  { id: "dendrite-5", x: 47.6, y: 26.1 },
  { id: "dendrite-6", x: 47.7, y: 7.5 },
  { id: "dendrite-7", x: 45.3, y: 5.6 },
  { id: "dendrite-8", x: 31.0, y: 2.9 },
  { id: "dendrite-9", x: 29.1, y: 4.5 },
  { id: "dendrite-10", x: 26.8, y: 14.8 },
  { id: "dendrite-11", x: 23.3, y: 18.3 },
  { id: "dendrite-12", x: 7.2, y: 3.9 },
  { id: "dendrite-13", x: 8.8, y: 21.1 },
  { id: "dendrite-14", x: 18.3, y: 43.1 },
  { id: "dendrite-15", x: 7.1, y: 63.7 },
  { id: "dendrite-16", x: 19.8, y: 70.4 },
  { id: "dendrite-17", x: 22.5, y: 71.5 },
  { id: "dendrite-18", x: 10.2, y: 75.6 },
  { id: "dendrite-19", x: 3.1, y: 86.3 },
  { id: "dendrite-20", x: 13.6, y: 96.9 },
];

// Notes/neurotransmitters: same fixed-slot pattern as axon terminals and
// dendrite trunks — one dot per note, up to this many; beyond that, the
// last slot becomes an overflow node. Positioned in the open middle gap
// between the dendrite fan (stays under x≈48) and the axon fan (stays
// above x≈65), so these shouldn't collide with either — worth a quick
// visual check after adding real coordinates for dendrites/axons, since
// this was verified against an earlier, sparser version of those.
const NOTE_SLOTS = [
  { id: "note-1", x: 50, y: 24 },
  { id: "note-2", x: 58, y: 30 },
  { id: "note-3", x: 42, y: 34 },
  { id: "note-4", x: 63, y: 40 },
  { id: "note-5", x: 48, y: 46 },
  { id: "note-6", x: 55, y: 52 },
  { id: "note-7", x: 44, y: 58 },
  { id: "note-8", x: 62, y: 60 },
];

/**
 * Builds the list of clickable regions for the neuron, mapping real data
 * (projects, experience items) onto the fixed anchor slots above. If
 * there are more items than slots, the last slot becomes an overflow
 * node that opens a list of everything beyond what's individually
 * represented, rather than requiring the artwork to grow.
 */
export function buildRegions({ projects, experienceItems, notesItems }) {
  const regions = [
    {
      ...SOMA,
      type: "about",
      label: "About Krithi",
    },
  ];

  regions.push(...mapItemsToSlots(projects, AXON_TERMINALS, "project", "Project"));
  regions.push(
    ...mapItemsToSlots(experienceItems, DENDRITE_TRUNKS, "experience", "Experience")
  );
  regions.push(...mapItemsToSlots(notesItems, NOTE_SLOTS, "note", "Note"));

  return regions;
}

function mapItemsToSlots(items, slots, type, displayName) {
  const overflowNeeded = items.length > slots.length;
  const lastIndex = slots.length - 1;

  return slots
    .map((slot, index) => {
      const isOverflowSlot = overflowNeeded && index === lastIndex;

      if (isOverflowSlot) {
        const remaining = items.slice(index);
        return {
          ...slot,
          type: `${type}-overflow`,
          label: `${remaining.length} more — see all`,
          dataIds: remaining.map((item) => item.id),
        };
      }

      const item = items[index];
      if (!item) return null;

      return {
        ...slot,
        type,
        label: `${displayName}: ${item.title}`,
        dataId: item.id,
      };
    })
    .filter(Boolean);
}
