"use client";
import { useEffect, useRef } from "react";

const lines = [
  { text: "Cada resposta verificada no terreno", accent: false },
  { text: "chega ao mapa e ao relatório", accent: false },
  { text: "sem se perder pelo caminho.", accent: true },
];

// Each word lights up as it crosses a line 65% down the viewport, in reading order.
export default function TaglineSection() {
  const root = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const words = Array.from(root.current?.querySelectorAll<HTMLElement>(".tagline-word") ?? []);
    if (!words.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      words.forEach((word) => word.classList.add("is-lit"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-lit");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -35% 0px" },
    );
    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="tagline-reveal container" aria-label="O que nos guia">
      <p ref={root}>
        {lines.map((line, lineIndex) => (
          <span key={line.text}>
            {line.text.split(" ").map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`} className={`tagline-word${line.accent ? " is-accent" : ""}`}>
                {word}{" "}
              </span>
            ))}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
    </section>
  );
}
