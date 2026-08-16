"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-ink-950/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-ink-200 bg-white p-7 shadow-soft-lg sm:rounded-2xl sm:p-9 dark:border-ink-700 dark:bg-ink-850"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-ink-200 px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-wide text-ink-500 dark:border-ink-700 dark:text-ink-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3
              id="project-modal-title"
              className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50"
            >
              {project.name}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900 dark:border-ink-700 dark:text-ink-400 dark:hover:border-ink-200 dark:hover:text-ink-50"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          {project.image && (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-ink-100 dark:border-ink-800">
              <Image
                src={project.image}
                alt={`${project.name} interface preview`}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover object-top"
              />
              <div className="absolute bottom-2 right-2 rounded-md bg-black/55 px-2 py-0.5 text-[9.5px] font-medium text-white backdrop-blur-sm">
                UI concept, not a live screenshot
              </div>
            </div>
          )}

          <div>
            <p className="eyebrow mb-1.5">Overview</p>
            <p className="text-[14.5px] leading-relaxed text-ink-600 dark:text-ink-300">
              {project.overview}
            </p>
          </div>

          {project.solution && (
            <div>
              <p className="eyebrow mb-1.5">Solution</p>
              <p className="text-[14.5px] leading-relaxed text-ink-600 dark:text-ink-300">
                {project.solution}
              </p>
            </div>
          )}

          <div>
            <p className="eyebrow mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-ink-100 px-2.5 py-1 text-[12px] text-ink-600 dark:bg-ink-800 dark:text-ink-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.github || project.liveDemo) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-300 px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-900 dark:border-ink-600 dark:text-ink-100 dark:hover:border-ink-300"
                >
                  <Github size={15} />
                  View Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-button transition-colors hover:bg-accent-dim"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
