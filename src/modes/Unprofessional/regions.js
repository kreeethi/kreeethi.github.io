// Fixed anchor points on the neuron artwork, given as percentages of the
// SVG's width/height (viewBox is 800x400 in the placeholder). These are
// intentionally decoupled from the artwork's actual path data — hit areas
// are simple invisible buttons overlaid on top of the image, not the SVG
// shapes themselves. That's what makes it possible to drop in a real
// hand-traced SVG later (Stage 7) by only nudging these numbers, without
// touching any interaction logic.

const SOMA = { id: "soma", x: 20, y: 50 };

// Real axons don't usually branch along the shaft, but they do branch at
// the terminal into multiple boutons — so a fixed number of terminal
// slots is anatomically reasonable, not just a UI convenience. Six is a
// generous count relative to today's 5 projects, so growth mostly just
// fills in an already-drawn structure.
const AXON_TERMINALS = [
  { id: "axon-1", x: 77.5, y: 17.5 },
  { id: "axon-2", x: 82.5, y: 27.5 },
  { id: "axon-3", x: 85.6, y: 42.5 },
  { id: "axon-4", x: 85.6, y: 57.5 },
  { id: "axon-5", x: 82.5, y: 72.5 },
  { id: "axon-6", x: 77.5, y: 82.5 },
];

// Dendrite trunks stay a smaller fixed count (experience/research grows
// more slowly than projects). Fine branching in the artwork is purely
// decorative and isn't represented here at all.
const DENDRITE_TRUNKS = [
  { id: "dendrite-1", x: 5, y: 15 },
  { id: "dendrite-2", x: 3.1, y: 37.5 },
  { id: "dendrite-3", x: 3.1, y: 62.5 },
  { id: "dendrite-4", x: 5, y: 85 },
];

/**
 * Builds the list of clickable regions for the neuron, mapping real data
 * (projects, experience items) onto the fixed anchor slots above. If
 * there are more items than slots, the last slot becomes an overflow
 * node that opens a list of everything beyond what's individually
 * represented, rather than requiring the artwork to grow.
 */
export function buildRegions({ projects, experienceItems }) {
  const regions = [
    {
      ...SOMA,
      type: "about",
      label: "About Krithi",
    },
  ];

  regions.push(...mapItemsToSlots(projects, AXON_TERMINALS, "project"));
  regions.push(
    ...mapItemsToSlots(experienceItems, DENDRITE_TRUNKS, "experience")
  );

  return regions;
}

function mapItemsToSlots(items, slots, type) {
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
        label: `${type === "project" ? "Project" : "Experience"}: ${item.title}`,
        dataId: item.id,
      };
    })
    .filter(Boolean);
}
