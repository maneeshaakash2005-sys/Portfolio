"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { personal } from "@/lib/data";
import Reveal from "@/components/Reveal";

const contactDetails = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
  { icon: Linkedin, label: "LinkedIn", value: personal.linkedinLabel, href: personal.linkedin },
  { icon: Github, label: "GitHub", value: personal.githubLabel, href: personal.github },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-16 bg-ink-900 py-24">
      <div className="section-container">
        <Reveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-accent-soft">
            Contact
          </p>
          <h2 className="mt-3 font-display text-[1.9rem] font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink-400 sm:text-base">
            I&apos;m always interested in learning, building new products, and connecting with
            people in technology.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-button transition-all duration-200 ease-out hover:bg-accent-dim hover:-translate-y-0.5"
            >
              Email Me
              <Mail size={15} strokeWidth={2.25} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:border-white/30 hover:bg-white/10"
            >
              LinkedIn
              <Linkedin size={15} strokeWidth={2.25} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:border-white/30 hover:bg-white/10"
            >
              GitHub
              <Github size={15} strokeWidth={2.25} />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal className="space-y-3">
            {contactDetails.map((item) => {
              const Body = (
                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-accent/40">
                  <item.icon size={17} strokeWidth={1.75} className="flex-none text-ink-400" />
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-500">
                      {item.label}
                    </p>
                    <p className="text-[13.5px] text-ink-200">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="block"
                >
                  {Body}
                </a>
              ) : (
                <div key={item.label}>{Body}</div>
              );
            })}
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <div>
                <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-ink-500 focus:border-accent-soft"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-ink-500 focus:border-accent-soft"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-ink-500 focus:border-accent-soft"
                  placeholder="What would you like to talk about?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-button transition-colors hover:bg-accent-dim"
              >
                Send Message
                <Send size={14} />
              </button>
              <p className="text-[11px] text-ink-500" role="status">
                {sent
                  ? "Opening your email client to send this message…"
                  : "Opens your email client with this message pre-filled."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
