"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Projectos" },
  { href: "/sobre", label: "Sobre mim" },
];
export default function Navbar({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Saltar para o conteúdo
      </a>
      <nav className="container nav-inner" aria-label="Navegação principal">
        <Link href="/" className="wordmark" aria-label="NexoVibe — Início">
          <span className="brand-symbol" aria-hidden="true">
            N<span>↗</span>
          </span>
          NexoVibe<span className="wordmark-dot">.</span>
        </Link>
        <div className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a className="nav-contact" href="/#contacto">
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <div id="mobile-navigation" className="mobile-nav" hidden={!open}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={active === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a href="/#contacto" onClick={() => setOpen(false)}>
            Vamos conversar ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
