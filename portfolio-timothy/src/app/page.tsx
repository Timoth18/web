"use client";

import Image from "next/image";
import Nav from "@/components/nav";
import ToolsCarouselController from "@/components/tools";
import { tools } from "@/data/tools";
import { useRef } from "react";

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
            <h2 className="mb-12 tools-title">Tools</h2>
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

        <section id="projects" className="min-h-screen px-6 py-20">
          <div className="max-w-6xl mx-auto">
          <h2>Projects</h2>
          </div>
            
            <article>
              <h3>Student Score Dashboard</h3>
              <p>
                Web application for a bimbingan belajar to track student scores
                and generate reports.
              </p>
              <ul>
                <li>Designed E2E test scenarios for score input & reports</li>
                <li>Validated data consistency between UI and database</li>
                <li>Handled flaky behavior caused by async data loading</li>
              </ul>
          </article>
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
