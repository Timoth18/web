"use client";

import Image from "next/image";
import Nav from "@/components/nav";
import { motion } from "framer-motion"
import ToolsCarouselController from "@/components/tools";
import { tools } from "@/data/tools";
import { useRef } from "react";
import { projects } from "@/data/project";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section id="home" className="home-section px-6 py-20">
          <div className="home-glass mx-auto" onClick={() => scrollToSection("about")}> 

          <div className="max-w-6xl mx-auto">
            <h1 className="home-title animate-fade-up">
              Hi, I’m Timothy Situmeang
            </h1>

            <p className="home-subtitle mt-6 animate-fade-up delay-1">
              QA Engineer expanding into software development — making processes smoother and solutions impactful.
            </p>

            <div className="mt-10 animate-fade-up delay-2">
              <span className="inline-block text-sm tracking-wide text-(--granite-500)">
                Scroll to explore ↓
              </span>
            </div>
          </div>
          </div>
        </section>


        <section id="about" className="about-section py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="about-glass" onClick={() => scrollToSection("tools")}>
              <h2>About Me</h2>

            <p>
            I’m a QA Engineer with experience making software reliable, efficient, and user-friendly. 
            Over the years, I’ve developed a versatile toolkit of testing frameworks, automation techniques, and debugging practices, 
            which I use to bring clarity to complex systems. 
            I thrive by analyzing software from multiple angles, catching issues early, and improving workflows to make testing smoother and more effective.
            </p>

            <p>
            Lately, I’ve been expanding into software development, learning to build applications from the ground up and understand the full software lifecycle. 
            This journey allows me to bridge testing and development, creating solutions that are not only functional but also robust and maintainable.
            </p>

            <p>
            I’m looking for opportunities to broaden my knowledge and contribute in ways that make a meaningful impact. 
            I approach projects with curiosity, patience, and a steady focus on improvement, always seeking ways to make processes and tools more effective.
            </p>
            </div>
          </div>
        </section>

        <section id="tools" className="tools-section px-6 py-20">
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
        <ToolsCarouselController />
      </section>

        <section
          id="projects"
          className="min-h-screen px-6 py-20"
          >
          <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
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
                className="px-3 py-1 text-xs rounded-full bg-white/50 text-green-700 border border-white/20"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Details */}
          <ul className="mt-auto text-sm text-black space-y-1 mb-5">
            {project.details.map((detail, idx) => (
              <li key={idx}>• {detail}</li>
            ))}
          </ul>
          <a
          href={project.link}
          className="mt-auto inline-block text-sm font-medium text-green-700 px-4 py-2 rounded-xl bg-white/50 hover:bg-white/20 transition self-start"
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
      </main>
    </>
  );
}
