"use client";

import Image from "next/image";
import Nav from "@/components/nav";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import ToolsCarouselController from "@/components/tools";
import { tools } from "@/data/tools";
import { useRef } from "react";
import { projects } from "@/data/project";
import Footer from "@/components/footer";
import { useState } from "react";
import ContactModal from "@/components/contactModal";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax Y
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -160]),
    {
      stiffness: 90,
      damping: 22,
    }
  );

  // Smooth opacity
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]),
    {
      stiffness: 60,
      damping: 30,
    }
  );

  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col">
         <section
          id="home"
          ref={sectionRef}
          className="home-section min-h-screen px-6 py-20"
        >
          <motion.div className="motion-wrapper flex flex-col h-full">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="home-glass mx-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
              onClick={() => scrollToSection("about")}
            >
              <div className="max-w-6xl mx-auto">

                <h1 className="home-title">
                  Hi, I’m Timothy Situmeang
                </h1>

                <p className="home-subtitle mt-6">
                  QA Engineer expanding into software development — making
                  processes smoother and solutions impactful.
                </p>

                <div className="mt-10">
                  <span className="inline-block text-sm tracking-wide">
                    Scroll to explore ↓
                  </span>
                </div>

              </div>
            </motion.div>
            <motion.button
              onClick={() => setOpen(true)}
              style={{ y, opacity }}
              className="
                mt-auto
                self-center
                mb-10
                px-6 py-3
                bg-cyan-500
                text-black
                font-medium
                rounded-full
                hover:bg-cyan-400
                transition
                shadow-md
                will-change-transform
                will-change-opacity
              "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </section>


        <section id="about" className="about-section py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileHover={{scale:1.02}}
            className="about-glass" onClick={() => scrollToSection("tools")}>
              <h2>About Me</h2>
            <p>
            I’m a QA Engineer focused on building reliable, efficient, and user-friendly software. 
            I use testing frameworks, automation, and debugging to catch issues early and improve workflows.
            </p>
            <p>
            Recently, I’ve been expanding into software development to better understand the full lifecycle and build more robust, maintainable solutions. 
            I’m driven by curiosity, continuous learning, and a commitment to making a meaningful impact.
            </p>

            </motion.div>
          </div>
        </section>

        <section id="tools" className="tools-section px-6 py-20" onClick={() => scrollToSection("projects")}>
          <motion.div 
          className="motion-wrapper"  
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}>
          <div className="max-w-8xl mx-auto">
            <h2 className="mb-12 tools-title">Tech Stack</h2>
            </div>

              <div className="tools-carousel-wrapper">
            <div className="tools-carousel" id="tools-carousel">
            {tools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <div className="tool-logo">
                    <img src={tool.logo} alt={`${tool.name} logo`} />
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                </div>
              ))}
              {tools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <div className="tool-logo">
                    <img src={tool.logo} alt={`${tool.name} logo`} />
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                </div>
              ))}
                {tools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <div className="tool-logo">
                    <img src={tool.logo} alt={`${tool.name} logo`} />
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <ToolsCarouselController />
        </section>

        <section
          id="projects"
          className="min-h-screen px-6 py-20"
          >
          <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-black text-center mb-14"
          >
          Featured Projects
          </motion.h2>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
          <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.03 }}
          className="relative group"
          >
          {/* Glow */}
          <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-cyan-400/40 to-purple-500/40 blur-lg opacity-0 group-hover:opacity-100 transition" />
          {/* Glass Card */}
          <div className="relative h-full rounded-3xl p-7 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex flex-col">
          <h3 className="text-2xl font-semibold text-black mb-3">
          {project.title}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
          {project.shortDesc}
          </p>
           <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-white/50 text-[rgba(0,0,0,1)] border border-white/20"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Details */}
          <ul className="mt-auto text-s text-[rgba(218, 204, 255, 0.9)] space-y-1 font-normal mb-5">
            {project.details.map((detail, idx) => (
              <li key={idx}>• {detail}</li>
            ))}
          </ul>
          <a
          href={project.link}
          className="mt-auto inline-block text-sm font-medium text-[rgb(0,0,0)] px-4 py-2 rounded-xl bg-white/50 hover:bg-white/20 transition self-start"
          >
          View Project →
          </a>
          </div>
          </motion.div>
          ))}
          </div>
          </div>
          </section>

        <section id="contact" className="min-h-screen px-6 py-20">
          <div className="max-w-5xl mx-auto">
          <h2>Contact</h2>
          </div>
        </section>
        
        <Footer onOpen={() => setOpen(true)} />

        <ContactModal
        open={open}
        onClose={() => setOpen(false)}
      />
      </main>
    </>
  );
}
