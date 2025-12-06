import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Page container */}
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16 space-y-16">
        {/* Header / Nav */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Krithi Iyer
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              Electrical Engineering @ Georgia Tech • Threads: Bioengineering & Signal Processing
            </p>
          </div>
          <nav className="flex gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-amber-300 transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-amber-300 transition-colors">
              Research
            </a>
            <a href="#about" className="hover:text-amber-300 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero / Intro */}
        <section className="grid md:grid-cols-[2fr,1.3fr] gap-10 md:gap-14 items-start">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.2em] text-xs text-amber-300/80">
              Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              I build tools and experiments at the intersection of{" "}
              <span className="text-amber-300 font-bold">
                electrical engineering, neuroscience, and computation
              </span>
              .
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              I&apos;m an Electrical Engineering undergraduate at Georgia Tech
              focused on neuroengineering and brain–computer interfaces. I hope to
              design circuits and software that make sense of neural and
              behavioral data and to use that understanding to build better
              devices and experiments.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Neuroengineering",
                "Brain–Computer Interfaces",
                "Signal Processing",
                "Computational Neuroscience",
                "Embedded Systems",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-700/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick stats card */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
              <h3 className="text-sm font-semibold text-slate-200">
                Snapshot
              </h3>
              <dl className="space-y-3 text-xs md:text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Current focus</dt>
                  <dd className="text-right">
                    BCIs, neurostimulation, computational tools for neuroscience
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Strengths</dt>
                  <dd className="text-right">
                    Turning messy data into structured systems, bridging hardware & software
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Looking for</dt>
                  <dd className="text-right">
                    Research & engineering roles in neurotech / neuroengineering
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Projects */}
        const projects = [
        {
          id: "fsr-prosthetic",
          title: "Force-Sensitive Resistor Calibration for Prosthetic Hand",
          summary:
            "Designed and tested Arduino-based circuits and calibration routines to map FSR output to grip force for an affordable prosthetic hand.",
          bullets: [
            "Designed voltage divider circuits for FSR-based force sensing",
            "Collected calibration data and mapped voltage to force",
            "Characterized sensor behavior (nonlinearity, saturation regions)",
          ],
          tech: "Arduino, FSRs, basic circuit design, Python/Matplotlib",
          longDescription: `
            This project focused on making low-cost prosthetic hands more usable by giving them a sense of grip force.
            I designed voltage divider circuits using force-sensitive resistors (FSRs), then collected data to map analog
            voltage readings to approximate grip forces. From there, I explored how to threshold and scale the signal to
            drive simple control actions (e.g., close hand, relax hand) and what calibration routines would look like for a
            non-technical user.
          `,
          context: `
            I worked on this as part of a student team interested in accessible prosthetic design. My contribution focused
            on the sensing and calibration side rather than mechanical design, which fit my interest in translating signals
            into interpretable control inputs.
          `,
          links: [],
        },
        {
          id: "neuronal-modeling",
          title: "Neuronal Modeling & Analysis (Independent Project)",
          summary:
            "Implemented leaky integrate-and-fire neurons, spike-triggered averaging, and Oja's rule to explore how neurons encode and adapt to input structure.",
          bullets: [
            "Implemented LIF neurons with configurable parameters and input currents",
            "Used spike-triggered averaging to estimate receptive fields from simulated data",
            "Explored Oja's rule as a simple model of Hebbian plasticity with normalization",
          ],
          tech: "Python, NumPy, Matplotlib",
          longDescription: `
            In this ongoing independent project, I'm building small tools to understand how simple neuron models transform
            input signals. I simulate LIF neurons driven by noisy input, then use spike-triggered averaging to estimate which
            features of the stimulus drive spiking. I also implement Oja's rule to see how synaptic weights converge onto
            dominant input patterns over time.
          `,
          context: `
            The goal is to connect abstract computational neuroscience ideas to concrete code and visualizations, and to
            eventually extend this into population-level models or sensory encoding tasks.
          `,
          links: [],
        },
        {
          id: "deeplabcut-xmalab",
          title: "DeepLabCut Error-Frame Detection Tool (In Progress)",
          summary:
            "Building a Python/Streamlit tool to automatically flag trajectory discontinuities in DeepLabCut outputs for rat gait analysis.",
          bullets: [
            "Engineered features from bony landmark trajectories (position, velocity, discontinuities)",
            "Prototyped rules to detect abrupt trajectory jumps indicative of tracking errors",
            "Designing a UI for quickly reviewing and correcting flagged frames",
          ],
          tech: "Python, pandas, Streamlit, basic ML",
          longDescription: `
            DeepLabCut is powerful but can still produce frame-by-frame tracking errors, especially when markers are occluded.
            Currently, much of the correction happens manually in XMALab by visually scanning trajectories. My tool parses
            DeepLabCut output, computes features such as inter-frame displacement and velocity, and flags candidate error frames.
            The goal is to reduce manual correction time and create better training datasets for retraining the model.
          `,
          context: `
            This project started from a bottleneck I saw in the lab: a lot of human time spent just finding errors. It's also
            my first self-directed software tool intended to be used by others in the lab, so I'm thinking about usability
            and maintainability, not just making something "that works once."
          `,
          links: [],
        },
        {
          id: "next-project",
          title: "Your Next Neurotech / Hardware Project",
          summary:
            "Placeholder for your next project—use this slot when you have a new build, analysis, or paper-ready figure.",
          bullets: [
            "Summarize the problem in one sentence",
            "Highlight your unique contribution (design, analysis, implementation)",
            "Close with what changed because you did this work",
          ],
          tech: "To be decided",
          longDescription: `
            This slot is intentionally open. As you build more projects, you can either replace this card or link it to a new
            write-up. Having a placeholder reminds you that your portfolio is a living document, not a static list of things
            you're "stuck" with.
          `,
          context: `
            When you add a new project, think in terms of: problem, constraints, your approach, concrete results, and what
            you'd do next if you had more time.
          `,
          links: [],
        },
      ];

      function App() {
        const [selectedProject, setSelectedProject] = useState(projects[0]); // default selection

        return (
          <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="max-w-5xl mx-auto px-4 py-10 md:py-16 space-y-16">
              {/* ... header, hero, etc. above here ... */}

              {/* Projects */}
              <section id="projects" className="space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold">Selected Projects</h2>

                {/* Grid of clickable project cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`text-left rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                        selectedProject?.id === project.id
                          ? "border-amber-300/80 bg-slate-900"
                          : "border-slate-800 bg-slate-900/70 hover:border-slate-600 hover:bg-slate-900"
                      }`}
                    >
                      <div className="space-y-3">
                        <h3 className="font-semibold text-base md:text-lg">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-300">{project.summary}</p>
                        <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                          {project.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 text-xs text-slate-400 flex items-center justify-between">
                        <span>Tech: {project.tech}</span>
                        <span className="text-amber-300 text-[11px]">
                          Click for more details →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Detail panel for selected project */}
                {selectedProject && (
                  <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
                      Project Details
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm text-slate-300 whitespace-pre-line">
                      {selectedProject.longDescription}
                    </p>
                    <p className="text-xs text-slate-400 whitespace-pre-line">
                      {selectedProject.context}
                    </p>
                    {selectedProject.links && selectedProject.links.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-3 text-sm">
                        {selectedProject.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* ... research, about, contact, footer below here ... */}
            </div>
          </div>
        );
      }

      export default App;


        {/* Research */}
        <section id="research" className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">Research</h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-sm">
              <h3 className="font-semibold">
                Neuroimmune Modulation with Audiovisual Flicker (Singer Lab)
              </h3>
              <p className="text-slate-300">
                Confocal imaging and 3D analysis of microglia, astrocytes, and
                amyloid-β plaque interactions in mouse models of stress and
                neurodegeneration. Exploring how noninvasive audiovisual flicker
                changes neuroimmune signatures.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-sm">
              <h3 className="font-semibold">
                Comparative Neuromechanics & Gait Analysis (Comparative Neuromechanics Lab)
              </h3>
              <p className="text-slate-300">
                DeepLabCut-based tracking and kinematic modeling of rat gait,
                focusing on robust extraction of bony landmark trajectories and
                tools to streamline error correction.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">About</h2>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            I like problems that sit between disciplines: hardware that needs
            computational intuition, neuroscience that needs engineering-level
            rigor, and messy data that needs structure. I&apos;m most energized when
            I&apos;m building something concrete – circuits, tools, analyses – that
            make complex systems a bit more legible.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-3 pb-4">
          <h2 className="text-xl md:text-2xl font-semibold">Contact</h2>
          <p className="text-sm text-slate-300">
            The best way to reach me is by email.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {/* Replace with real links */}
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

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-4 mt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Krithi Iyer. Built with React & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}

export default App;
