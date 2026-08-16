import { Rocket } from "lucide-react";
import { buildingProjects } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Building() {
  return (
    <section className="bg-ink-50 py-24 dark:bg-ink-850">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Beyond the Classroom</p>
          <div className="flex items-center gap-2.5">
            <Rocket size={19} strokeWidth={1.75} className="text-ink-400 dark:text-ink-500" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
              Building &amp; Entrepreneurship
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500 dark:text-ink-400">
            Alongside my degree, I&apos;m a product builder — working on startup-oriented software
            projects to turn ideas into working systems.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildingProjects.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 70}>
              <div className="card h-full p-6 transition-shadow duration-200 ease-out hover:shadow-soft-lg">
                <span className="text-[10.5px] font-semibold uppercase tracking-wide text-accent dark:text-accent-soft">
                  Startup Project
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-ink-900 dark:text-ink-50">
                  {item.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500 dark:text-ink-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
