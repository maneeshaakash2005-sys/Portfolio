import { education } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 bg-ink-50 py-24 dark:bg-ink-850">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
            Education
          </h2>
        </Reveal>

        <div className="mt-9 max-w-3xl">
          <ol className="relative border-l border-ink-200 pl-7 dark:border-ink-700">
            {education.map((entry, i) => (
              <Reveal key={entry.degree} as="li" delay={i * 80} className="relative mb-10 pl-1 last:mb-0">
                <span
                  className={`absolute -left-[35px] top-1 h-3.5 w-3.5 rounded-full border-2 ${
                    entry.current
                      ? "border-accent bg-accent/15 dark:border-accent-soft"
                      : "border-ink-300 bg-ink-50 dark:border-ink-600 dark:bg-ink-900"
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-base font-semibold text-ink-900 dark:text-ink-50">
                    {entry.degree}
                  </h3>
                  {entry.period && (
                    <span className="text-[12px] font-medium text-accent dark:text-accent-soft">
                      {entry.period}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{entry.institution}</p>
                {entry.description && (
                  <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-ink-500 dark:text-ink-400">
                    {entry.description}
                  </p>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
