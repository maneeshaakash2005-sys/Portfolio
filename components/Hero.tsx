"use client";

import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  GraduationCap,
  Landmark,
  Linkedin,
  Mail,
  CalendarDays,
} from "lucide-react";
import { personal } from "@/lib/data";

const educationLines = [
  { icon: GraduationCap, text: "BSc Artificial Intelligence" },
  { icon: Landmark, text: "SLIIT, Sri Lanka" },
  { icon: CalendarDays, text: "Expected 2028" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-900 pt-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 82% 8%, rgba(79,107,255,0.16) 0%, rgba(11,15,20,0) 60%), linear-gradient(180deg, #0B0F14 0%, #111827 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-[110px]"
        style={{ background: "#4F6BFF" }}
      />

      <div className="section-container relative grid items-center gap-14 py-16 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:py-20">
        <div className="animate-fade-up">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-soft">
            AI Undergraduate
          </p>

          <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Hi, I&apos;m
            <br />
            Maneesha{" "}
            <span className="bg-gradient-to-r from-accent-soft to-[#8B7CFF] bg-clip-text text-transparent">
              Akash
            </span>
          </h1>

          <p className="mt-5 text-base font-medium text-ink-200 sm:text-lg">
            AI Undergraduate | Aspiring Software &amp; AI Engineer
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-400 sm:text-base">
            {personal.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-button transition-all duration-200 ease-out hover:bg-accent-dim hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={15} strokeWidth={2.25} />
            </a>
            <a
              href={personal.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:border-white/30 hover:bg-white/10"
            >
              Download CV
              <Download size={15} strokeWidth={2.25} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:border-white/30 hover:bg-white/10"
            >
              Contact Me
              <Mail size={15} strokeWidth={2.25} />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <span className="text-[13px] text-ink-500">Connect with me</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Github size={15} strokeWidth={1.9} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Linkedin size={15} strokeWidth={1.9} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send an email"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Mail size={15} strokeWidth={1.9} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm pb-8 animate-fade-up [animation-delay:120ms] opacity-0 [animation-fill-mode:forwards] lg:mx-0 lg:ml-auto lg:max-w-md">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-card-dark">
            <Image
              src="/Portfolio/images/maneesha.jpg"
              alt="Portrait of Maneesha Akash"
              width={520}
              height={640}
              priority
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            />
          </div>

          {/* Education card — stacked lines, overlapping the portrait */}
          <div className="absolute -bottom-6 -right-2 w-[78%] rounded-xl border border-white/10 bg-ink-850/95 p-4 shadow-soft-lg backdrop-blur-sm sm:right-4 sm:w-[70%]">
            <ul className="space-y-2.5">
              {educationLines.map((line) => (
                <li key={line.text} className="flex items-center gap-2.5">
                  <line.icon size={15} strokeWidth={1.75} className="flex-none text-accent-soft" />
                  <span className="text-[12.5px] font-medium text-ink-100">{line.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
