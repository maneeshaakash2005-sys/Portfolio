import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 py-10">
      <div className="section-container flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-white">{personal.name}</p>
          <p className="mt-0.5 text-[12px] text-ink-500">
            AI Undergraduate | Aspiring Software &amp; AI Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
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
      <p className="mt-8 text-center text-[11px] text-ink-600">
        © 2026 {personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
