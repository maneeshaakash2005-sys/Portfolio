import { Award } from "lucide-react";
import { certificates, softSkills, languages } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Certificates() {
  return (
    <section className="scroll-mt-16 bg-white py-24 dark:bg-ink-900">
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-3">Certificates</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
                Certificates
              </h2>
            </Reveal>
            <div className="mt-8 space-y-3">
              {certificates.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 60}>
                  <div className="card flex items-center gap-3 px-5 py-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent-light text-accent dark:bg-accent/15 dark:text-accent-soft">
                      <Award size={15} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm text-ink-700 dark:text-ink-200">{cert.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-10">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
                  Languages
                </p>
                <div className="mt-3 flex gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-ink-200 px-3.5 py-1.5 text-sm text-ink-600 dark:border-ink-700 dark:text-ink-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={80}>
              <p className="eyebrow mb-3">Soft Skills</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
                How I Work
              </h2>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-ink-100 px-4 py-2.5 text-sm text-ink-700 dark:bg-ink-800 dark:text-ink-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
