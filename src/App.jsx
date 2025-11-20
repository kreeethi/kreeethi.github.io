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
              Electrical Engineering @ Georgia Tech • Neuroengineering, BCIs, Computational Neuroscience
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
              focused on neuroengineering and brain–computer interfaces. I like
              designing circuits and software that make sense of neural and
              behavioral data – and using that understanding to build better
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
        <section id="projects" className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-base md:text-lg">
                  Force-Sensitive Resistor Calibration for Prosthetic Hand
                </h3>
                <p className="text-sm text-slate-300">
                  Designed and tested Arduino-based circuits, voltage dividers, and
                  calibration routines to map FSR output to grip force for an
                  affordable prosthetic hand.
                </p>
                <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                  <li>Component selection & voltage divider design</li>
                  <li>Analog voltage → resistance → force mapping</li>
                  <li>Data collection & basic sensor characterization</li>
                </ul>
              </div>
              <div className="pt-4 text-xs text-slate-400">
                Tech: Arduino, FSRs, basic circuit design, Python/Matplotlib (for plotting)
              </div>
            </article>

            {/* Project 2 */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-base md:text-lg">
                  Neuronal Modeling & Analysis (Independent Project)
                </h3>
                <p className="text-sm text-slate-300">
                  Implemented leaky integrate-and-fire neurons, spike-triggered
                  averaging, and Oja&apos;s rule to explore how neurons encode and adapt
                  to input structure.
                </p>
                <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                  <li>Simulated LIF neurons with spike-rate adaptation</li>
                  <li>Spike-triggered averaging for receptive field estimation</li>
                  <li>Oja&apos;s rule to model synaptic plasticity & feature selectivity</li>
                </ul>
              </div>
              <div className="pt-4 text-xs text-slate-400">
                Tech: Python, NumPy, Matplotlib
              </div>
            </article>

            {/* Project 3 */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-base md:text-lg">
                  DeepLabCut Error-Frame Detection Tool (In Progress)
                </h3>
                <p className="text-sm text-slate-300">
                  Building a Python/Streamlit tool to automatically flag trajectory
                  discontinuities in DeepLabCut outputs for rat gait analysis,
                  reducing manual correction time in XMALab.
                </p>
                <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                  <li>Feature engineering on bony landmark trajectories</li>
                  <li>Outlier & discontinuity detection for error frames</li>
                  <li>Planned ML classifier for adaptive error detection</li>
                </ul>
              </div>
              <div className="pt-4 text-xs text-slate-400">
                Tech: Python, pandas, Streamlit, basic ML
              </div>
            </article>

            {/* Project 4 placeholder */}
            <article className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/40 p-5 flex flex-col justify-center text-sm text-slate-400">
              <p className="font-medium text-slate-200 mb-1">
                Next project goes here
              </p>
              <p>
                Use this slot for your next neurotech, hardware, or computational
                project. Summarize:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>What problem you tackled</li>
                <li>What you built or analyzed</li>
                <li>Why it matters / what you learned</li>
              </ul>
            </article>
          </div>
        </section>

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
            The best way to reach me is by email. I&apos;m always happy to talk about
            neuroengineering, BCIs, computational tools, or interesting problems
            at the interface of brain and machine.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {/* Replace with real links */}
            <a
              href="mailto:youremail@domain.com"
              className="px-4 py-2 rounded-full border border-amber-300/60 text-amber-200 hover:bg-amber-300/10 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/your-github"
              className="px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
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
