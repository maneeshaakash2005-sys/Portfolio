import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 bg-white py-24 dark:bg-ink-900">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
            Experience
          </h2>
        </Reveal>

        <div className="mt-9 max-w-3xl">
          {experience.map((job) => (
            <Reveal key={job.role}>
              <div className="card p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
                    {job.role}
                  </h3>
                  <span className="text-[12.5px] text-ink-400 dark:text-ink-500">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{job.company}</p>

                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[13.5px] leading-relaxed text-ink-600 dark:text-ink-300"
                    >
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-400 dark:bg-ink-600" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-ink-100 pt-5 dark:border-ink-800">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
                    Demonstrates
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.demonstrates.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-ink-100 px-3 py-1 text-[12px] text-ink-600 dark:bg-ink-800 dark:text-ink-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
