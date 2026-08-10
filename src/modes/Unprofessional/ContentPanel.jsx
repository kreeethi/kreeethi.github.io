import { useEffect, useRef } from "react";

function AboutContent() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-300 leading-relaxed">
        Electrical engineering student at Georgia Tech, interested in
        brain-computer interfaces, computational neuroscience, and
        biological signal processing.
      </p>
      <p className="text-sm text-slate-300 leading-relaxed">
        This is the soma — the core of things. The dendrites (left) hold
        experience and research; the axon (right) holds projects.
      </p>
    </div>
  );
}

function ProjectContent({ project }) {
  if (!project) return null;
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-300 leading-relaxed">{project.highlight}</p>
      {project.sections?.map((sec) => (
        <div key={sec.heading}>
          <h4 className="text-sm font-semibold text-slate-200 mb-1">
            {sec.heading}
          </h4>
          <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
            {sec.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
      {project.links?.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-2 rounded-full border border-slate-700 hover:border-slate-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function ExperienceContent({ item }) {
  if (!item) return null;
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
      {item.links?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-2 rounded-full border border-slate-700 hover:border-slate-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function OverflowList({ region, projects, experienceItems }) {
  const source = region.type === "project-overflow" ? projects : experienceItems;
  const items = source.filter((item) => region.dataIds.includes(item.id));
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="text-sm text-slate-300 border-b border-slate-800 pb-2 last:border-b-0"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

function resolveContent(region, projects, experienceItems) {
  if (region.type === "about") {
    return { title: region.label, body: <AboutContent /> };
  }

  if (region.type === "project") {
    const project = projects.find((p) => p.id === region.dataId);
    return {
      title: project?.title ?? region.label,
      body: <ProjectContent project={project} />,
    };
  }

  if (region.type === "experience") {
    const item = experienceItems.find((e) => e.id === region.dataId);
    return {
      title: item?.title ?? region.label,
      body: <ExperienceContent item={item} />,
    };
  }

  // project-overflow / experience-overflow
  return {
    title: region.label,
    body: (
      <OverflowList
        region={region}
        projects={projects}
        experienceItems={experienceItems}
      />
    ),
  };
}

function ContentPanel({ region, projects, experienceItems, onClose, triggerRef }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!region) return undefined;

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef?.current?.focus();
    };
  }, [region, onClose, triggerRef]);

  if (!region) return null;

  const { title, body } = resolveContent(region, projects, experienceItems);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close panel"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="panel-enter relative z-10 w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            className="shrink-0 text-sm px-3 py-1 rounded-full border border-slate-700 hover:border-slate-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
          >
            Close
          </button>
        </div>
        {body}
      </div>
    </div>
  );
}

export default ContentPanel;
