"use client";

import { useMemo, useState } from "react";
import { filterCategories, projects, type Project, type ProjectCategory } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-16 bg-white py-24 dark:bg-ink-900">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Projects</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
            Projects I&apos;ve Built
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink-500 dark:text-ink-400">
            A selection of software, AI, SaaS, and university projects.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                aria-pressed={activeFilter === cat.value}
                className={`rounded-full border px-4 py-2 text-[12.5px] font-medium transition-colors duration-200 ${
                  activeFilter === cat.value
                    ? "border-accent bg-accent text-white"
                    : "border-ink-200 text-ink-500 hover:border-ink-400 hover:text-ink-800 dark:border-ink-700 dark:text-ink-400 dark:hover:border-ink-500 dark:hover:text-ink-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>

        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
}
