import Image from "next/image";
import { Code2, Lightbulb, Rocket, Users, ArrowRight } from "lucide-react";
import { about, aboutHeading, valueProps } from "@/lib/data";
import Reveal from "@/components/Reveal";

const icons = [Code2, Lightbulb, Rocket, Users];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-24 dark:bg-ink-900">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr_1.1fr] lg:gap-8">
          <Reveal>
            <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-ink-100 shadow-soft dark:border-ink-800 lg:mx-0">
              <Image
                src="/Portfolio/images/maneesha.jpg"
                alt="Portrait of Maneesha Akash"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <p className="eyebrow mb-4">About Me</p>
            <h2 className="font-display text-[1.7rem] font-bold leading-tight tracking-tight text-ink-900 sm:text-3xl dark:text-ink-50">
              {aboutHeading}
            </h2>
            {about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 20)}
                className="mt-4 text-[14.5px] leading-relaxed text-ink-500 dark:text-ink-400"
              >
                {p}
              </p>
            ))}
            <a
              href="#skills"
              className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent transition-colors hover:text-accent-dim dark:text-accent-soft dark:hover:text-white"
            >
              Learn more about me
              <ArrowRight size={14} />
            </a>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {valueProps.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={item.title} delay={100 + i * 60}>
                  <div className="card h-full p-5 transition-shadow duration-200 ease-out hover:shadow-soft-lg">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-light text-accent dark:bg-accent/15 dark:text-accent-soft">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-3.5 font-display text-[14.5px] font-semibold text-ink-900 dark:text-ink-50">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500 dark:text-ink-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
