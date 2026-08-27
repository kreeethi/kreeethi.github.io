import { useEffect, useRef } from "react";

function AboutContent() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-300 leading-relaxed">
        I am an Electrical Engineering undergraduate at Georgia Tech, and I'm 
        really interested in the intersection of biology, specifically neuroscience, 
        and technology. I've always had an affinity for doodling, and when I chanced
        upon Santiago Cajal's work, I realized I could blend my two interests. The
        neuron you see on your screen is one I drew, inspired by both Cajal's
        neuroanatomy drawings, and the visuals I see on the Imaris computer when
        I'm reconstructing microscopy images for the Singer Lab.
      </p>
      <p className="text-sm text-slate-300 leading-relaxed">
        You're currently at the soma - the core of the neuron. To your left
        are the dendrites, the attenae of the neuron that receieve information.
        Clicking on any of the glowing dots will reveal my experiences - where I've
        learned, and continue to learn, much of what I know today. To your right
        are the axon terminals, where information from the neuron is transmitted to
        other neurons. These contain the various projects I have built.
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

function OverflowList({ region, projects, experienceItems, notesItems }) {
  const sourceMap = {
    "project-overflow": projects,
    "experience-overflow": experienceItems,
    "note-overflow": notesItems,
  };
  const source = sourceMap[region.type] ?? [];
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

function SingleNoteContent({ note }) {
  if (!note) return null;
  return (
    <div className="space-y-2">
      <span className="inline-block text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-400">
        {note.type}
      </span>
      {Array.isArray(note.body) ? (
        <ul className="space-y-1 text-sm text-slate-300 leading-relaxed list-disc list-inside">
          {note.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-300 leading-relaxed">{note.body}</p>
      )}
    </div>
  );
}

function resolveContent(region, projects, experienceItems, notesItems) {
  if (region.type === "about") {
    return { title: region.label, body: <AboutContent /> };
  }

  if (region.type === "note") {
    const note = notesItems.find((n) => n.id === region.dataId);
    return {
      title: note?.title ?? region.label,
      body: <SingleNoteContent note={note} />,
    };
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

  // project-overflow / experience-overflow / note-overflow
  return {
    title: region.label,
    body: (
      <OverflowList
        region={region}
        projects={projects}
        experienceItems={experienceItems}
        notesItems={notesItems}
      />
    ),
  };
}

function ContentPanel({ region, projects, experienceItems, notesItems, onClose, triggerRef }) {
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

  const { title, body } = resolveContent(region, projects, experienceItems, notesItems);

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
        className="panel-enter relative z-10 w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl border border-slate-800 bg-[#0D0D0D] p-6 space-y-4"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            className="shrink-0 text-sm px-3 py-1 rounded-full border border-slate-700 hover:border-slate-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF9E3D]"
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
