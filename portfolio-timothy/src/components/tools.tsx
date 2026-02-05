"use client";

import { useEffect, useRef } from "react";

export default function ToolsCarouselController() {
  const rafId = useRef<number | null>(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const carousel = document.getElementById("tools-carousel") as HTMLElement;
    if (!carousel) return;

    // Clone children for seamless looping
    const children = Array.from(carousel.children);
    const originalCount = children.length;
    children.forEach((child) => carousel.appendChild(child.cloneNode(true)));

    const getLoopWidth = () => {
      let width = 0;
      for (let i = 0; i < originalCount; i++) {
        width += (carousel.children[i] as HTMLElement).offsetWidth;
      }
      return width;
    };
    const loopWidth = getLoopWidth();

    const speed = 30; // px per second
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPausedRef.current) {
        positionRef.current -= (speed * delta) / 1000;
        if (Math.abs(positionRef.current) >= loopWidth) {
          positionRef.current += loopWidth;
        }
        carousel.style.transform = `translateX(${positionRef.current}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    // Pause/resume helpers
    const pause = () => (isPausedRef.current = true);
    const resume = () => (isPausedRef.current = false);

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);
    carousel.addEventListener("touchstart", pause);
    carousel.addEventListener("touchend", resume);

    // Drag support
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX;
      scrollStart = positionRef.current;
      pause();
      carousel.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.pageX - startX;
      positionRef.current = scrollStart + dx;
      carousel.style.transform = `translateX(${positionRef.current}px)`;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.style.cursor = "grab";
      resume();
    };

    carousel.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    carousel.style.cursor = "grab";

    return () => {
      // ✅ Properly cancel animation
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);

      // Remove all listeners
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
      carousel.removeEventListener("touchstart", pause);
      carousel.removeEventListener("touchend", resume);
      carousel.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return null;
}
