import { Hammer } from "lucide-react";
import { currentlyBuilding } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CurrentlyBuilding() {
  return (
    <section className="bg-ink-50 py-20 dark:bg-ink-850">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Currently Building</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl dark:text-ink-50">
            What I&apos;m working on right now
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {currentlyBuilding.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <div className="card h-full p-5 transition-shadow duration-200 ease-out hover:shadow-soft-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[15px] font-semibold text-ink-900 dark:text-ink-50">
                    {item.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-light px-2.5 py-1 text-[11px] font-medium text-accent dark:bg-accent/15 dark:text-accent-soft">
                    <Hammer size={11} strokeWidth={2} />
                    Building
                  </span>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-500 dark:text-ink-400">
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
