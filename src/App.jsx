import { useMemo, useState } from "react";

/* =======================
   PROJECTS DATA
======================= */

const projects = [
  {
    id: "fsr",
    title: "FSR Calibration for Prosthetic Grip Sensing",
    highlight:
      "Designed a calibration workflow to translate noisy FSR voltage readings into interpretable grip-force estimates.",
    tags: ["Circuits", "Calibration", "Prosthetics", "Protocols"],
    tech: "Arduino, FSRs, voltage divider, data calibration",
    // Optional later: put images in /public/projects/fsr/...
    images: [
      // { src: "/projects/fsr/setup.jpg", alt: "Calibration setup", caption: "Bench setup for calibration runs." },
      // { src: "/projects/fsr/curve.png", alt: "Calibration curve", caption: "Example mapping from voltage → resistance." },
      // { src: "/projects/fsr/sheet.png", alt: "Calibration tracking sheet", caption: "Standardized tracking to make runs repeatable." },
    ],
    // Optional later: add links (repo/pdf/demo)
    links: [
      // { label: "Repo", href: "https://github.com/..." },
      // { label: "Calibration Protocol (PDF)", href: "/files/fsr-protocol.pdf" },
      // { label: "Demo Video", href: "https://youtube.com/..." },
    ],
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Owned planning + task breakdown so calibration became a reusable workflow.",
          "Designed the circuit from the FSR documentation and sensor behavior.",
          "Derived voltage-divider equations to compute resistance from measured voltage.",
          "Wrote a calibration protocol and created a tracking sheet for repeatable runs.",
        ],
      },
      {
        heading: "Why it was hard",
        bullets: [
          "FSRs are finicky: nonlinearity + variability makes “accurate” calibration difficult.",
          "The goal was a stable, repeatable process that can be improved—not a perfect curve once.",
        ],
      },
      {
        heading: "Next steps",
        bullets: [
          "Build a modular mounting/integration system for an FSR in a prosthetic finger.",
          "Test how placement affects signal stability and usable force range.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "This was one of those projects where the hard part wasn’t “getting a reading,” it was turning a finicky sensor into something you can trust enough to build on.",
        "It also made me care a lot more about workflows: a clean protocol + tracking sheet can matter as much as the circuit itself, especially if future teammates need to calibrate consistently.",
        "Going forward, I’m thinking less in terms of perfect accuracy and more in terms of robustness: what’s the most stable signal we can extract for control and feedback?",
      ],
    },
  },

  {
    id: "neuro",
    title: "Neuronal Modeling & Analysis",
    highlight:
      "Implemented small computational neuroscience tools to connect theory to code and intuition.",
    tags: ["Neuro", "Modeling", "Python"],
    tech: "Python, NumPy, Matplotlib",
    images: [],
    links: [],
    sections: [
      {
        heading: "What it includes (so far)",
        bullets: [
          "Leaky integrate-and-fire neuron simulations",
          "Spike-triggered averaging (STA) experiments",
          "Oja’s rule as a simple plasticity model",
        ],
      },
      {
        heading: "Direction",
        bullets: [
          "Turn each concept into a clean notebook-style writeup with interpretable plots.",
          "Build toward population-level models or sensory encoding mini-studies.",
        ],
      },
      {
        heading: "Next steps",
        bullets: [
          "Pick one narrative thread and write a concise ‘case study’ deep dive.",
          "Add a small artifact gallery of plots and explanatory figures.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "I like projects like this because they force clarity: if I can’t explain the behavior with a plot and a few sentences, I don’t really understand it.",
        "This is my sandbox for building intuition that I can later bring into real neural signals and closed-loop systems.",
      ],
    },
  },
];

/* =======================
   RESEARCH DATA (carousel only)
   Specs:
   - Comparative neuromechanics: paper
   - Alzheimer's: poster
   - SCI Moorjani: nothing
======================= */

const researchItems = [
  {
    id: "comparative-neuromechanics",
    title: "Comparative Neuromechanics Lab",
    description:
      "Work on gait/neuromechanics analysis and tooling, with an emphasis on extracting reliable kinematics and building structured workflows for interpretation.",
    link: null,
  },
  {
    id: "alzheimers",
    title: "Alzheimer’s Disease & Neuroimmune Signaling",
    description:
      "Confocal imaging and quantitative analysis of microglia–amyloid interactions and neuroimmune signatures; focused on methods, pipeline clarity, and reproducibility.",
    link: { label: "Poster", href: "/research/singer-poster.pdf" },
  },
  {
    id: "sci-moorjani",
    title: "SCI Moorjani Lab",
    description:
      "Early-stage involvement; keeping public detail minimal for now while I define the most meaningful, shareable slice of the work.",
    link: null,
  },
];

const notesItems = [
  {
    id: "n1",
    type: "Question",
    title: "When is a signal “good enough”?",
    body:
      "A precise signal isn’t automatically usable. In biological systems, robustness + interpretability often matter more than squeezing out the last bit of accuracy.",
  },
  {
    id: "n2",
    type: "Question",
    title: "Models: clarity or false confidence?",
    body:
      "When does a model genuinely sharpen intuition — and when does it just make me feel certain because it’s clean?",
  },
  {
    id: "n3",
    type: "Fragment",
    title: "Protocols are epistemology",
    body:
      "Writing a protocol forces assumptions into the open. If I can’t explain a step clearly, I usually don’t understand the system as well as I think I do.",
  },
  {
    id: "n4",
    type: "Fragment",
    title: "Perception as an interface",
    body:
      "Ideas like Maya interest me as early intuitions that perception may be a constructed interface — not a direct readout of reality.",
  },
  {
    id: "n5",
    type: "Lens",
    title: "Words I’m thinking with",
    body:
      "robustness · interpretability · abstraction · feedback · uncertainty · graceful failure",
  },
];

function App() {
  const [expandedId, setExpandedId] = useState("fsr");
  const expandedProject = projects.find((p) => p.id === expandedId) || null;

  const projectsCount = projects.length;
  const researchCount = researchItems.length;

  // If 1–2 projects, don't scroll; if 3+, enable carousel behavior
  const projectsUseCarousel = projectsCount >= 3;
  const researchUseCarousel = researchCount >= 3;

  const projectTileWidth = useMemo(() => {
    // When carousel, use fixed card width; when not, let them stretch nicely
    return projectsUseCarousel ? "w-[320px] md:w-[360px]" : "w-full";
  }, [projectsUseCarousel]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hide scrollbars for our horizontal scrollers */}
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16 space-y-14">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Krithi Iyer
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              Electrical Engineering @ Georgia Tech • Threads: Bioengineering & Signal Processing.
            </p>
          </div>
          <nav className="flex gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-amber-300 transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-amber-300 transition-colors">
              Research
            </a>
            <a href="#notes" className="hover:text-amber-300 transition-colors">
              Notes
            </a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid md:grid-cols-[2fr,1.3fr] gap-10 md:gap-14 items-start">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.2em] text-xs text-amber-300/80">
              Portfolio
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              I&apos;m an Electrical Engineering undergraduate at Georgia Tech with interests in
              neural signals, sensing, and analysis.
            </p>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-2">
              This site is a collection of{" "}
              <span className="text-amber-300 font-medium">
                projects, research, and ideas
              </span>{" "}
              I&apos;m currently working through.
            </p>
          </div>
        </section>

        {/*Projects*/}
        <section id="projects" className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Projects</h2>
            <p className="text-sm text-slate-300 mt-1">
              Click a project to expand the engineering process.
            </p>
          </div>

          {/* Project tiles:*/}
          {projectsUseCarousel ? (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent" />

              <div
                className="hide-scrollbar flex gap-6 overflow-x-auto pb-2 px-2 scroll-smooth snap-x snap-mandatory"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {projects.map((p) => {
                  const isOpen = expandedId === p.id;

                  return (
                    <button
                      key={p.id}
                      onClick={() => setExpandedId(isOpen ? null : p.id)}
                      className={`snap-start shrink-0 ${projectTileWidth} text-left rounded-2xl border p-5 transition-all ${
                        isOpen
                          ? "border-amber-300/70 bg-slate-900"
                          : "border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-base md:text-lg leading-snug">
                          {p.title}
                        </h3>
                        <span className="text-[11px] text-amber-300/90">
                          {isOpen ? "Open ✓" : "Open →"}
                        </span>
                      </div>

                      <p className="text-sm text-slate-300 mt-2">{p.highlight}</p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-slate-950/40 border border-slate-800 text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-slate-400 mt-4">Tech: {p.tech}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => {
                const isOpen = expandedId === p.id;

                return (
                  <button
                    key={p.id}
                    onClick={() => setExpandedId(isOpen ? null : p.id)}
                    className={`text-left rounded-2xl border p-5 transition-all ${
                      isOpen
                        ? "border-amber-300/70 bg-slate-900"
                        : "border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-base md:text-lg leading-snug">
                        {p.title}
                      </h3>
                      <span className="text-[11px] text-amber-300/90">
                        {isOpen ? "Collapse ↑" : "Expand ↓"}
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 mt-2">{p.highlight}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-slate-950/40 border border-slate-800 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-400 mt-4">Tech: {p.tech}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Expanded detail panel */}
          {expandedProject && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
                    Project Deep Dive
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mt-1">
                    {expandedProject.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-3xl">
                    {expandedProject.highlight}
                  </p>
                </div>

                {/* Links area */}
                <div className="flex flex-wrap gap-2">
                  {expandedProject.links && expandedProject.links.length > 0 ? (
                    expandedProject.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm px-3 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors"
                      >
                        {l.label}
                      </a>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400">
                      Links slot (add repo / PDF / video when ready)
                    </span>
                  )}
                </div>
              </div>

              {/* Images area */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200">Artifacts</h4>
                {expandedProject.images && expandedProject.images.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {expandedProject.images.map((img) => (
                      <figure key={img.src} className="space-y-2">
                        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/40">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto block"
                            loading="lazy"
                          />
                        </div>
                        {img.caption && (
                          <figcaption className="text-xs text-slate-400">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-700/70 bg-slate-950/30 p-4 text-sm text-slate-400">
                    Add images/screenshots later by placing them in{" "}
                    <span className="text-slate-200">
                      /public/projects/&lt;project&gt;/
                    </span>{" "}
                    and adding entries to the{" "}
                    <span className="text-slate-200">images</span> array.
                  </div>
                )}
              </div>

              {/* Main sections */}
              <div className="grid md:grid-cols-3 gap-5">
                {expandedProject.sections.map((sec) => (
                  <div
                    key={sec.heading}
                    className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4 space-y-2"
                  >
                    <h4 className="text-sm font-semibold text-slate-200">
                      {sec.heading}
                    </h4>
                    <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Reflection */}
              {expandedProject.reflection && (
                <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 space-y-3">
                  <h4 className="text-sm font-semibold text-slate-200">
                    {expandedProject.reflection.heading || "Reflection"}
                  </h4>
                  <div className="space-y-2">
                    {expandedProject.reflection.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* =======================
            Research (carousel only)
        ======================= */}
        <section id="research" className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Research</h2>
            <p className="text-sm text-slate-300 mt-1">
              Research projects I’ve contributed to. Public artifacts linked where available.
            </p>
          </div>

          {/* Research tiles:
              - If 1–2 items: grid
              - If 3+: horizontal scroll carousel, scrollbar hidden
           */}
          {researchUseCarousel ? (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent" />

              <div
                className="hide-scrollbar flex gap-6 overflow-x-auto pb-2 px-2 scroll-smooth snap-x snap-mandatory"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {researchItems.map((r) => (
                  <div
                    key={r.id}
                    className="snap-start shrink-0 w-[340px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                  >
                    <h3 className="font-semibold text-base md:text-lg leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {r.description}
                    </p>

                    <div className="mt-4">
                      {r.link ? (
                        <a
                          href={r.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors text-amber-200"
                        >
                          {r.link.label} <span aria-hidden>→</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400">
                          No public artifacts available
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {researchItems.map((r) => (
                <div
                  key={r.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <h3 className="font-semibold text-base md:text-lg leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {r.description}
                  </p>

                  <div className="mt-4">
                    {r.link ? (
                      <a
                        href={r.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors text-amber-200"
                      >
                        {r.link.label} <span aria-hidden>→</span>
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">
                        No public artifacts available
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Placeholder: Notes */}
        <section id="notes" className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Notes</h2>
            <p className="text-sm text-slate-300 mt-1">
              Questions, ideas, and lenses I’m currently thinking with.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent" />

            <div
              className="hide-scrollbar flex gap-6 overflow-x-auto pb-2 px-2 scroll-smooth snap-x snap-mandatory"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {notesItems.map((n) => (
                <div
                  key={n.id}
                  className="snap-start shrink-0 w-[320px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-base md:text-lg leading-snug">
                      {n.title}
                    </h3>
                    <span className="shrink-0 text-[11px] px-2 py-1 rounded-full border border-slate-700 bg-slate-950/30 text-slate-300">
                      {n.type}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {n.body}
                  </p>

                  {/* Optional subtle link slot later */}
                  {/* {n.link && (
                    <a
                      href={n.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-4 text-sm text-amber-200 hover:underline"
                    >
                      {n.link.label} →
                    </a>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Contact */}
        <section id="contact" className="space-y-3 pb-6">
          <h2 className="text-xl md:text-2xl font-semibold">Contact</h2>
          <p className="text-sm text-slate-300">The best way to contact me is through email.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:krithi.iyer@gmail.com"
              className="px-4 py-2 rounded-full border border-amber-300/60 text-amber-200 hover:bg-amber-300/10 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/kreeethi"
              className="px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/krithi-iyer"
              className="px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-800 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Krithi Iyer.
        </footer>
      </div>
    </div>
  );
}

export default App;
