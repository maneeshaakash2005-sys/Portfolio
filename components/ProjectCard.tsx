"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

function initials(name: string) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="card group flex h-full flex-col overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft-lg">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View details for ${project.name}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-ink-100 dark:bg-ink-800"
      >
        <div className="absolute left-3 top-3 z-10 rounded-md bg-white/90 px-2 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-ink-600 shadow-sm backdrop-blur-sm dark:bg-ink-900/80 dark:text-ink-300">
          {project.tags[0]}
        </div>

        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.name} interface preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute bottom-2 right-2 rounded-md bg-black/55 px-2 py-0.5 text-[9.5px] font-medium text-white backdrop-blur-sm">
              UI concept
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <span className="font-display text-4xl font-extrabold tracking-tight text-ink-300 dark:text-ink-600">
              {initials(project.name)}
            </span>
          </div>
        )}
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[16px] font-semibold text-ink-900 dark:text-ink-50">
          {project.name}
        </h3>
        <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink-500 dark:text-ink-400">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-ink-100 px-2 py-0.5 text-[11px] text-ink-500 dark:bg-ink-800 dark:text-ink-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 dark:border-ink-800">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent transition-colors hover:text-accent-dim dark:text-accent-soft dark:hover:text-white"
          >
            Details
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <div className="flex items-center gap-3 opacity-80 transition-opacity duration-200 group-hover:opacity-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.name} on GitHub`}
                className="text-ink-400 transition-colors hover:text-ink-900 dark:hover:text-ink-50"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.name} live demo`}
                className="text-ink-400 transition-colors hover:text-accent dark:hover:text-accent-soft"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

