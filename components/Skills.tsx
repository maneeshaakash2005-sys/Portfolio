import { Braces, Wrench, BrainCircuit, Database, Layers } from "lucide-react";
import { skills } from "@/lib/data";
import Reveal from "@/components/Reveal";

const groups = [
  {
    title: "Programming",
    icon: Braces,
    items: skills.programming.map((s) => ({ name: s.name, level: s.level })),
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    items: skills.aiData.map((name) => ({ name, level: null })),
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: skills.toolsPlatforms.map((name) => ({ name, level: null })),
  },
  {
    title: "Databases",
    icon: Database,
    items: skills.databases.map((name) => ({ name, level: null })),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-ink-50 py-24 dark:bg-ink-850">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
            Technical Skills
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink-500 dark:text-ink-400">
            Skills I&apos;m actively using and developing, grouped the way I use them.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="card h-full p-6 transition-shadow duration-200 ease-out hover:shadow-soft-lg">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-light text-accent dark:bg-accent/15 dark:text-accent-soft">
                  <group.icon size={17} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-[15px] font-semibold text-ink-900 dark:text-ink-50">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between text-[13.5px] text-ink-500 dark:text-ink-400">
                      <span>{item.name}</span>
                      {item.level && (
                        <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
                          {item.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-6 card flex flex-wrap items-center gap-x-3 gap-y-2 p-6">
            <Layers size={17} strokeWidth={1.75} className="text-ink-400 dark:text-ink-500" />
            <span className="font-display text-[14px] font-semibold text-ink-900 dark:text-ink-50">
              Portfolio Technology
            </span>
            <span className="text-[12.5px] text-ink-400 dark:text-ink-500">
              — used to build this site, not listed as a CV skill
            </span>
            <div className="mt-2 flex w-full flex-wrap gap-2">
              {skills.portfolioTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-ink-100 px-3 py-1 text-[12px] text-ink-500 dark:bg-ink-800 dark:text-ink-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
