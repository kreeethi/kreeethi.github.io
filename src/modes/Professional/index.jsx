import { useState } from "react";
import { projects } from "../../data/projects";
import { experienceItems } from "../../data/experience";
import { notesItems } from "../../data/notes";
import ThemeToggle from "./ThemeToggle";
import ProjectGallery from "./ProjectGallery";

function Professional({ onEnterUnprofessional }) {
  const [expandedId, setExpandedId] = useState("fsr");
  const expandedProject = projects.find((p) => p.id === expandedId) || null;

  const projectsCount = projects.length;
  const researchCount = experienceItems.length;

  // If 1–2 projects, don't scroll; if 3+, enable carousel behavior
  const projectsUseCarousel = projectsCount >= 3;
  const researchUseCarousel = researchCount >= 3;

  return (
    <div className="relative min-h-screen bg-bg text-ink font-sans">
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

      {/* Faint "light from above" gradient, dark mode only — a small visual
          rhyme with the underwater/microscopy feel of Unprofessional Mode,
          absent in light mode so it doesn't force a metaphor that doesn't
          apply there. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 hidden dark:block bg-gradient-to-b from-accent/10 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-10 md:py-16 space-y-16">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight">
              Krithi Iyer
            </h1>
            {/* Signature move: a single 1px accent rule, styled like a
                signal trace rather than a decorative flourish. */}
            <div className="h-px w-16 bg-accent mt-3 mb-3" aria-hidden="true" />
            <p className="text-sm text-muted">
              Electrical Engineering @ Georgia Tech • Threads: Bioengineering & Signal Processing.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-mono text-muted">
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-accent transition-colors">
              Research
            </a>
            <a href="#notes" className="hover:text-accent transition-colors">
              Notes
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
            {/* <a href="/resume/krithi-iyer-resume-2026.pdf" className="hover:text-accent transition-colors">
              Resume (PDF)
            </a> */}
            <ThemeToggle />
            <button
              type="button"
              onClick={onEnterUnprofessional}
              className="text-sm px-3 py-1.5 rounded-full border border-border hover:border-accent/60 hover:text-accent transition-colors"
            >
              Neuron Mode →
            </button>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid md:grid-cols-[1.1fr,1fr] gap-10 md:gap-14 items-center">
          <div className="space-y-4 max-w-xl">
            <p className="font-mono uppercase tracking-[0.2em] text-xs text-accent-2/90">
              Hello!
            </p>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              I&apos;m an Electrical Engineering undergraduate at Georgia Tech interested in biological
              signal processing and medical devices.
            </p>

            <p className="text-sm md:text-base text-muted leading-relaxed mt-2">
              This portfolio showcases my {" "}
              <span className="text-accent-2 font-medium">
                experiences
              </span>{" "}
              which don't all fit on my resume. Outside of academics, I love playing word games (Washington Post
              Crossword, Minute Cryptic, LinkedIn's Wend!), and doodling neurons, which became a fascination of mine 
              after seeing Santiago Cajal's neuroanatomy drawings. I've added a {" "}
              <span className="text-accent-2 font-medium">
                "Neuron Mode"
              </span> {" "}
              to this portfolio, to explore my experiences from a different perspective. This mode is best viewed on a 
              larger screen.
              
            </p>
          </div>

          <div className="relative aspect-[3/2] w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-2xl border border-border bg-surface overflow-hidden">
            <img
              src="/images/portfolio-pic.jpg"
              alt="Krithi Iyer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/*Projects*/}
        <section id="projects" className="space-y-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold">Projects</h2>
            <p className="text-sm text-muted mt-1">
              Click on a project to learn more.
            </p>
            <p className="font-mono text-xs text-muted/80 mt-2">
              Scroll → for more
            </p>
          </div>

          {/* Project tiles:*/}
          {projectsUseCarousel ? (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-bg to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-bg to-transparent" />

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
                      className={`snap-start shrink-0 self-stretch w-[340px] md:w-[460px] flex flex-col text-left rounded-2xl border p-5 transition-all ${
                        isOpen
                          ? "border-accent/70 bg-surface"
                          : "border-border bg-surface/60 hover:bg-surface hover:border-muted/60"
                      }`}

                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="min-w-0 font-display font-semibold text-base md:text-lg leading-snug">
                          {p.title}
                        </h3>

                        <span className="shrink-0 whitespace-nowrap font-mono text-[11px] text-accent-2/90">
                          {isOpen ? "Collapse ↑" : "Expand ↓"}
                        </span>
                      </div>

                      <p className="text-sm text-muted mt-2">{p.highlight}</p>

                      <div className="flex flex-wrap gap-3 mt-3">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] text-muted border-b border-accent-2/40 pb-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="font-mono text-xs text-muted/80 mt-4">Tech: {p.tech}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((p) => {
                const isOpen = expandedId === p.id;

                return (
                  <button
                    key={p.id}
                    onClick={() => setExpandedId(isOpen ? null : p.id)}
                    className={`text-left rounded-2xl border p-5 transition-all ${
                      isOpen
                        ? "border-accent/70 bg-surface"
                        : "border-border bg-surface/60 hover:bg-surface hover:border-muted/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display font-semibold text-base md:text-lg leading-snug">
                        {p.title}
                      </h3>
                      <span className="font-mono text-[11px] text-accent-2/90">
                        {isOpen ? "Collapse ↑" : "Expand ↓"}
                      </span>
                    </div>

                    <p className="text-sm text-muted mt-2">{p.highlight}</p>

                    <div className="flex flex-wrap gap-3 mt-3">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] text-muted border-b border-accent-2/40 pb-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="font-mono text-xs text-muted/80 mt-4">Tech: {p.tech}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* Expanded detail panel */}
          {expandedProject && (
            <div className="rounded-2xl border border-border bg-surface/70 p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="font-mono uppercase tracking-[0.2em] text-xs text-accent-2/90">
                    Project Deep Dive
                  </p>
                  <h3 className="font-display text-lg md:text-xl font-semibold mt-1">
                    {expandedProject.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 max-w-3xl">
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
                        className="text-sm px-3 py-2 rounded-full border border-border hover:border-accent/60 hover:text-accent hover:bg-surface transition-colors"
                      >
                        {l.label}
                      </a>
                    ))
                  ) : (
                    <span className="text-xs text-muted">
                      Links slot (add repo / PDF / video when ready)
                    </span>
                  )}
                </div>
              </div>

              {/* Main sections */}
              <div className="grid md:grid-cols-3 gap-6">
                {expandedProject.sections.map((sec) => (
                  <div
                    key={sec.heading}
                    className="rounded-2xl border border-border bg-bg/30 p-4 space-y-2"
                  >
                    <h4 className="font-display text-sm font-semibold">
                      {sec.heading}
                    </h4>
                    <ul className="text-sm text-muted list-disc list-inside space-y-1">
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <ProjectGallery images={expandedProject.images} />
              </div>

              {/* Reflection */}
              {expandedProject.reflection && (
                <div className="rounded-2xl border border-border bg-bg/30 p-5 space-y-3">
                  <h4 className="font-display text-sm font-semibold">
                    {expandedProject.reflection.heading || "Reflection"}
                  </h4>
                  <div className="space-y-2">
                    {expandedProject.reflection.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-sm text-muted leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Research (part of "experience" data, rendered as its own section here) */}
        <section id="research" className="space-y-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold">Experiences</h2>
            <p className="text-sm text-muted mt-1">
              Work experiences and research projects I’ve contributed to. I've linked public artifacts where available.
            </p>
            <p className="font-mono text-xs text-muted/80 mt-2">
              Scroll → for more
            </p>
          </div>

          {researchUseCarousel ? (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-bg to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-bg to-transparent" />

              <div
                className="hide-scrollbar flex gap-6 overflow-x-auto pb-2 px-2 scroll-smooth snap-x snap-mandatory"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {experienceItems.map((r) => (
                  <div
                    key={r.id}
                    className="snap-start shrink-0 w-[360px] md:w-[460px] rounded-2xl border border-border bg-surface/60 p-5"
                  >
                    <h3 className="font-display font-semibold text-base md:text-lg leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
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
                            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-border hover:border-accent/60 hover:bg-surface transition-colors text-accent"
                          >
                            {l.label} <span aria-hidden>→</span>
                          </a>
                        ))
                      ) : (
                        <span className="text-xs text-muted">No public artifacts available</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {experienceItems.map((r) => (
                <div
                  key={r.id}
                  className="rounded-2xl border border-border bg-surface/60 p-5"
                >
                  <h3 className="font-display font-semibold text-base md:text-lg leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
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
                          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-border hover:border-accent/60 hover:bg-surface transition-colors text-accent"
                        >
                          {l.label} <span aria-hidden>→</span>
                        </a>
                      ))
                    ) : (
                      <span className="text-xs text-muted">No public artifacts available</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Notes */}
        <section id="notes" className="space-y-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold">Notes</h2>
            <p className="text-sm text-muted mt-1">
              Random things I think about, quotes I like, and other miscellanea.
            </p>
            <p className="font-mono text-xs text-muted/80 mt-2">
              Scroll → for more
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-bg to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-bg to-transparent" />

            <div
              className="hide-scrollbar flex gap-6 overflow-x-auto pb-2 px-2 scroll-smooth snap-x snap-mandatory"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {notesItems.map((n) => (
                <div
                  key={n.id}
                  className="snap-start shrink-0 w-[340px] md:w-[460px] rounded-2xl border border-border bg-surface/60 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold text-base md:text-lg leading-snug">
                      {n.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] px-2 py-1 rounded-full border border-border bg-bg/30 text-muted">
                      {n.type}
                    </span>
                  </div>

                  {Array.isArray(n.body) ? (
                    <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                      {n.body.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      {n.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-3 pb-6">
          <h2 className="font-display text-xl md:text-2xl font-semibold">Contact</h2>
          <p className="text-sm text-muted">The best way to contact me is through email.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:krithi.iyer@gmail.com"
              className="px-4 py-2 rounded-full border border-accent/60 text-accent hover:bg-accent/10 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/kreeethi"
              className="px-4 py-2 rounded-full border border-border hover:border-muted/60 hover:bg-surface transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/krithi-iyer"
              className="px-4 py-2 rounded-full border border-border hover:border-muted/60 hover:bg-surface transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="border-t border-border pt-4 font-mono text-xs text-muted/80">
          © {new Date().getFullYear()} Krithi Iyer. Created with React & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}

export default Professional;
