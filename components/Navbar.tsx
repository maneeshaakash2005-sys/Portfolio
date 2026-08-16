"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { personal } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const textTone = scrolled
    ? "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
    : "text-ink-200 hover:text-white";

  const iconBtnTone = scrolled
    ? "border-ink-200 bg-ink-100 text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300"
    : "border-white/10 bg-white/10 text-white hover:border-white/30 hover:bg-white/20";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-200/80 bg-white/80 shadow-soft backdrop-blur-md dark:border-ink-800 dark:bg-ink-900/80"
          : "border-b border-white/0 bg-transparent"
      }`}
    >
      <nav className="section-container flex h-[64px] items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className={`font-display text-[15px] font-bold tracking-[0.04em] transition-colors ${
            scrolled ? "text-ink-900 dark:text-ink-50" : "text-white"
          }`}
        >
          MANEESHA AKASH
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative pb-1 text-[13.5px] font-medium transition-colors ${textTone}`}
              >
                {link.label}
                {active === link.id && (
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full ${
                      scrolled ? "bg-accent" : "bg-accent-soft"
                    }`}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${iconBtnTone}`}
          >
            <Github size={15} strokeWidth={1.9} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${iconBtnTone}`}
          >
            <Linkedin size={15} strokeWidth={1.9} />
          </a>
          <ThemeToggle inverted={!scrolled} />
        </div>

        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeToggle inverted={!scrolled} />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${iconBtnTone}`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-200 bg-white px-5 pb-6 pt-2 shadow-soft lg:hidden dark:border-ink-800 dark:bg-ink-900">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-medium text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-ink-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3 border-t border-ink-200 px-2 pt-4 dark:border-ink-800">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 dark:border-ink-700 dark:text-ink-400"
            >
              <Github size={16} strokeWidth={1.9} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 dark:border-ink-700 dark:text-ink-400"
            >
              <Linkedin size={16} strokeWidth={1.9} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
