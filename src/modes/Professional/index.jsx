import { useMemo, useState } from "react";
import { projects } from "../../data/projects";
import { experienceItems } from "../../data/experience";
import { notesItems } from "../../data/notes";

function Professional({ onEnterUnprofessional }) {
  const [expandedId, setExpandedId] = useState("fsr");
  const expandedProject = projects.find((p) => p.id === expandedId) || null;

  const projectsCount = projects.length;
  const researchCount = experienceItems.length;

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
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
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
            <a href="/resume/krithi-iyer-resume-2026.pdf" className="hover:text-amber-300 transition-colors">
              Resume (PDF)
            </a>
            <button
              type="button"
              onClick={onEnterUnprofessional}
              className="text-sm px-3 py-1.5 rounded-full border border-slate-700 hover:border-amber-300/60 hover:text-amber-300 transition-colors"
            >
              Unprofessional Mode →
            </button>
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

        {/* Research (part of "experience" data, rendered as its own section here) */}
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

          {researchUseCarousel ? (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-slate-950 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-slate-950 to-transparent" />

              <div
                className="hide-scrollbar flex gap-6 overflow-x-auto pb-2 px-2 scroll-smooth snap-x snap-mandatory"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {experienceItems.map((r) => (
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
              {experienceItems.map((r) => (
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

        {/* Notes */}
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

export default Professional;
