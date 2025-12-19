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
    links: [
      { label: "Repo", href: "https://github.com/kreeethi/fsr-calibration" },
      // { label: "Calibration Protocol (PDF)", href: "/files/fsr-protocol.pdf" },
      { label: "Demo Video", href: "https://youtu.be/62SAwx68mfI?si=2xxjBSnZVEQOxt-A" },
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
          "The goal was a stable, repeatable process that can be improved, rather than a perfect curve once.",
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
        "The hard part of this project wasn't getting a reading (though sometimes getting an accurate one was difficult); the hard part was calibrating this finicky sensor into something we could trust enough to build on.",
        "I also realized the importance of workflows: having task breakdowns, a clean protocol, and a well-organized tracking sheet were about as important as the circuit itself, especially if future teammates need to calibrate consistently.",
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
    links: [
      { label: "Repo", href: "https://github.com/kreeethi/comp-neuro" }
    ],
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
          "Gain conceptual understanding of computational neuroscience topics.",
          "Turn each concept into a notebook-style, reflective writeup with plots.",
          "Build toward population-level models or sensory encoding mini-studies.",
        ],
      },
      {
        heading: "Next steps",
        bullets: [
          "Select a narrative thread and do a 'case-study' deep dive.",
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

  {
    id: "arm-band",
    title: "Integration of Vibration Motors for Prosthetic Haptic Feedback",
    highlight:
      "Prototyped spring-cord lock mechanism and an iteratively fabricated arm band for haptic feedback integration.",
    tags: ["CAD", "Integration", "Prosthetics", "Prototyping"],
    tech: "Fusion 360, Neoprene, 3D Printing, Bambu Studio, Sewing",
    links: [
      { label: "Design Sketches", href: "/projects/arm-band/prototype-design.pdf" },
      // { label: "Calibration Protocol (PDF)", href: "/files/fsr-protocol.pdf" },
      // { label: "Demo Video", href: "https://youtu.be/62SAwx68mfI?si=2xxjBSnZVEQOxt-A" },
    ],
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Brainstormed spring-cord locking mechanism for secure and adjustable integration of vibration motors.",
          "Created initial design sketches and prototyping diagrams.",
          "Modified a related CAD model to meet functional constraints.",
          "Sewed and iterated through multiple arm-band prototypes, adapting techniques to handle neoprene's material qualities.",
        ],
      },
      {
        heading: "Design challenges",
        bullets: [
          "Material trade-offs: Neoprene is ideal for comfort and flexibility, but is difficult to sew.",
          "Comfort vs. stability: Ensuring secure attachment without leading to discomfort or restricted movement.",
          "Integration: Everything was very small. Fitting motors, wiring, and the locking mechanism into something compact was challenging.",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Produced a functional prototype that was used for testing of the vibration motors.",
          "Established a modular mechanical design that could be easily further developed for future iterations.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "I learned how important designing and documenting different ideas/prototypes was. Even though the spring-cord lock mechanism was not the final version, an earlier design I had developed (sliding track) was used.",
        "Small mechanical and material decisions compound in wearable systems.",
        "We made changes to the arm band almost weekly. Iterating both physically and in CAD was essential to understand comfort and functionality.",
      ],
    },
  },
];

/*Research Data*/

const researchItems = [
  {
    id: "comparative-neuromechanics",
    title: "Comparative Neuromechanics Lab",
    description:
      "DeepLabCut-based tracking and kinematic modeling of rat gait, focusing on extraction of bony landmark trajectories.",
    link: null,
  },
  {
    id: "alzheimers",
    title: "Neuroimmune Modulation with Audiovisual Flicker (Singer Lab)",
    description:
      "3D analysis of microglia, astrocytes, and amyloid beta plaque interactions in mouse models of chronic stress and neurodegeneration. Exploring how noninvasive audiovisual flicker can recruit neuroimmune cells.",
    links: [
      { label: "Poster", href: "/research/singer-poster.pdf" },
      { label: "Report", href: "/research/singer-fa25-report.pdf"},
    ],
  },
  {
    id: "sci-moorjani",
    title: "Moorjani Lab",
    description:
      "Creation of a granular scoring system for reach-and-retrieval task in rats with cervical spinal cord contusion injuries to evaluate and monitor motor ability.",
    link: null,
  },
];

const notesItems = [
  {
    id: "n1",
    type: "Question",
    title: "When is a signal trustworthy?",
    body:
      "A noisy signal often contains real information, but the problem is knowing when to trust it. I'm interested in how we separate truth from noise without pretending the noise isn't there.",
  },
  {
    id: "n2",
    type: "Reflection",
    title: "Choosing a direction",
    body:
      "Recently switching into EE made me realize that choosing a direction can feel like losing parts of yourself. I'm still learning how to treat specialization as focus, not erasure.",
  },
  {
    id: "n3",
    type: "Fragment",
    title: "Models as compression",
    body:
      "Models make reality easier to reason about. I like the clarity they give, but I'm always aware of the gap between a model working and reality being understood.",
  },
  {
    id: "n4",
    type: "Fragment",
    title: "Limits of objectivity",
    body:
      "What bothers me most about consciousness is that it may never be fully objective. Any explanation is tethered to subjective experience, which makes me wonder what 'understanding' really means here.",
  },
  {
    id: "n5",
    type: "Question",
    title: "In a parallel universe, would a platitude be called a plongitude?",
    body:
      "I like wordplay because it exposes how much meaning lives in structure, not just content.",
  },
  {
    id: "n6",
    type: "Fragment",
    title: "Prediction & Processing",
    body:
      "I tend to think of the brain as both a signal processor and a prediction engine — constantly filtering inputs while anticipating what comes next.",
  },
  {
    id: "n7",
    type: "Reflection",
    title: "Quotes I like",
    body:[
    "“The world is presented in a kaleidoscopic flux of impressions.” - Whorf",
    "“The flow of thought is persistent, and at times merciless.” - Mallett",
  ],
},
  {
    id: "n8",
    type: "Fragment",
    title: "States and their signatures",
    body:
      "I'm curious what underlies different conscious states. If brain-wave patterns differ meaningfully, maybe that's one of our footholds.",
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
    return projectsUseCarousel ? "w-[340px] md:w-[420px]" : "w-full";
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
              brain-computer interfaces, computational neuroscience, and biological signal processing.
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
              Click a project to expand.
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Scroll → for more
            </p>
          </div>

          {/* Project tiles:*/}
          {projectsUseCarousel ? (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent" />

              <div
                className="hide-scrollbar flex items-stretch gap-6 overflow-x-auto pb-2 px-2 scroll-smooth snap-x snap-mandatory"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {projects.map((p) => {
                  const isOpen = expandedId === p.id;

                  return (
                    <button
                      key={p.id}
                      onClick={() => setExpandedId(isOpen ? null : p.id)}
                      className={`snap-start shrink-0 self-stretch w-[320px] md:w-[420px] flex flex-col text-left rounded-2xl border p-5 transition-all ${
                        isOpen
                          ? "border-amber-300/70 bg-slate-900"
                          : "border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-600"
                      }`}

                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="min-w-0 font-semibold text-base md:text-lg leading-snug">
                          {p.title}
                        </h3>

                        <span className="shrink-0 whitespace-nowrap text-[11px] text-amber-300/90">
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
            <p className="text-xs text-slate-400 mt-2">
              Scroll → for more
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

                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.links && r.links.length > 0 ? (
                        r.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors text-amber-200"
                          >
                            {l.label} <span aria-hidden>→</span>
                          </a>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400">No public artifacts available</span>
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

                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.links && r.links.length > 0 ? (
                      r.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors text-amber-200"
                        >
                          {l.label} <span aria-hidden>→</span>
                        </a>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">No public artifacts available</span>
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
            <p className="text-xs text-slate-400 mt-2">
              Scroll → for more
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

                  {Array.isArray(n.body) ? (
                    <ul className="mt-3 space-y-2 text-sm text-slate-300 leading-relaxed list-disc list-inside">
                      {n.body.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {n.body}
                    </p>
                  )}


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
          © {new Date().getFullYear()} Krithi Iyer. Created with React & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}

export default App;
