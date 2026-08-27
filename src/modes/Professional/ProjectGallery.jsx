import { useEffect, useRef, useState } from "react";

function EmptyGallery() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-bg/30 p-4 flex flex-col items-center justify-center text-center gap-1 min-h-[160px]">
      <span className="font-mono text-xs text-muted">No photos yet</span>
      <span className="font-mono text-[11px] text-muted/70">
        Add entries to this project's `images` array in data/projects.js
      </span>
    </div>
  );
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const image = images[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close image"
        className="absolute inset-0 bg-black/85 cursor-default"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={image.alt || "Project photo"}
        className="relative z-10 max-w-4xl max-h-[85vh] w-full flex flex-col items-center gap-3"
      >
        <img
          src={image.src}
          alt={image.alt || ""}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
        />
        <div className="flex items-center gap-4">
          {images.length > 1 && (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous photo"
              className="text-sm px-3 py-1.5 rounded-full border border-border/60 text-white hover:border-accent transition-colors"
            >
              ← Prev
            </button>
          )}
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            className="text-sm px-3 py-1.5 rounded-full border border-border/60 text-white hover:border-accent transition-colors"
          >
            Close
          </button>
          {images.length > 1 && (
            <button
              type="button"
              onClick={onNext}
              aria-label="Next photo"
              className="text-sm px-3 py-1.5 rounded-full border border-border/60 text-white hover:border-accent transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ images }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return <EmptyGallery />;
  }

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);
  const current = images[index];

  return (
    <div className="rounded-2xl border border-border bg-bg/30 p-4 space-y-2">
      <h4 className="font-display text-sm font-semibold">Photos</h4>

      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="relative block w-full aspect-[4/3] rounded-lg overflow-hidden border border-border group"
        aria-label={`Expand photo: ${current.alt || "project photo"}`}
      >
        <img
          src={current.src}
          alt={current.alt || ""}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 text-[11px] font-mono px-2 py-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          Expand
        </span>
      </button>

      {images.length > 1 && (
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photo"
            className="text-xs font-mono text-muted hover:text-accent transition-colors px-2 py-1"
          >
            ← Prev
          </button>
          <div className="flex items-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            className="text-xs font-mono text-muted hover:text-accent transition-colors px-2 py-1"
          >
            Next →
          </button>
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={index}
          onClose={() => setLightboxOpen(false)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}

export default ProjectGallery;
