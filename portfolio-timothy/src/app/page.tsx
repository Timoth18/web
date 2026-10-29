"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import ToolsMarquee from "@/components/tools";
import Footer from "@/components/footer";
import ContactModal from "@/components/contactModal";
import { projects } from "@/data/project";

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const focusAreas = [
  {
    title: "Test automation",
    desc: "Maintainable Cypress suites that cover real user flows and stay non-flaky in CI.",
  },
  {
    title: "API & performance",
    desc: "Postman for API validation and negative cases, JMeter for load testing.",
  },
  {
    title: "Building software",
    desc: "Node.js, Express and Supabase — learning the full lifecycle by shipping my own apps.",
  },
];

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div {...reveal} className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-lilac-200/70">{subtitle}</p>}
    </motion.div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);

  return (
    <>
      <Nav onContact={openContact} />

      <main>
        {/* ---------- Hero ---------- */}
        <section id="home" className="relative flex min-h-svh items-center px-5 pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-lilac-200/80">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                QA Engineer · Open to opportunities
              </span>

              <h1 className="mt-8 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
                Hi, I&apos;m <span className="gradient-text">Timothy</span>
                <br />
                Situmeang.
              </h1>

              <p className="mt-8 max-w-2xl text-lg text-lilac-200/75 sm:text-xl">
                I test software the way people actually use it — catching issues early with automation,
                API checks and load testing. Now expanding into development to build what I test.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:bg-lilac-200"
                >
                  View my work
                </a>
                <button
                  onClick={openContact}
                  className="glass rounded-full px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Let&apos;s connect
                </button>
              </div>
            </motion.div>
          </div>

          <a
            href="#about"
            aria-label="Scroll to About"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-lilac-200/50 transition hover:text-white"
          >
            <motion.span
              className="block"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </a>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="px-5 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="About me" title="Quality first, from test plan to production." />
              <motion.div {...reveal} className="space-y-5 text-lg leading-relaxed text-lilac-200/75">
                <p>
                  I&apos;m a QA Engineer focused on building reliable, efficient and user-friendly software. I
                  turn business requirements into test scenarios, automate the flows that matter, and work
                  closely with developers to get bugs fixed before users ever see them.
                </p>
                <p>
                  Recently I&apos;ve been expanding into software development to understand the full lifecycle
                  and build more robust, maintainable solutions. I&apos;m driven by curiosity, continuous
                  learning and a commitment to making a meaningful impact.
                </p>
              </motion.div>
            </div>

            <div className="grid gap-4 self-end">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm text-accent">0{i + 1}</span>
                    <h3 className="text-lg font-semibold">{area.title}</h3>
                  </div>
                  <p className="mt-2 text-lilac-200/70">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Tools ---------- */}
        <section id="tools" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              eyebrow="Tech stack"
              title="Tools I work with"
              subtitle="From end-to-end automation to API, performance and data checks."
            />
          </div>
          <motion.div {...reveal}>
            <ToolsMarquee />
          </motion.div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              subtitle="Client QA engagements and a web app I built end to end."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                <motion.article
                  key={project.id}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: (i % 2) * 0.1 }}
                  className="group relative"
                >
                  <div
                    aria-hidden
                    className="absolute -inset-px rounded-3xl bg-linear-to-br from-lilac-400/40 via-transparent to-accent/40 opacity-0 blur-md transition duration-500 group-hover:opacity-100"
                  />
                  <div className="glass relative flex h-full flex-col rounded-3xl p-7 transition duration-300 group-hover:-translate-y-1 md:p-8">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {project.category}
                      </span>
                      {project.client && <span className="text-lilac-200/50">{project.client}</span>}
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-3 leading-relaxed text-lilac-200/75">{project.shortDesc}</p>

                    <ul className="mt-5 space-y-2 text-sm text-lilac-200/65">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-lilac-300" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-lilac-100/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 self-start text-sm font-medium text-white transition hover:text-accent"
                      >
                        View project ↗
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="px-5 py-24 md:py-32">
          <motion.div
            {...reveal}
            className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-lilac-400/30 blur-3xl"
            />
            <p className="eyebrow relative">Contact</p>
            <h2 className="relative mt-4 text-3xl font-semibold sm:text-5xl">
              Let&apos;s build something <span className="gradient-text">reliable</span>.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-lilac-200/70">
              Looking for a QA engineer who cares about the details? I&apos;d love to hear about your team and
              what you&apos;re working on.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={openContact}
                className="rounded-full bg-white px-7 py-3 font-medium text-ink transition hover:bg-lilac-200"
              >
                Send a message
              </button>
              <a
                href="https://github.com/Timoth18"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full px-7 py-3 font-medium text-white transition hover:bg-white/10"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <ContactModal open={open} onClose={closeContact} />
    </>
  );
}
