"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#metodologia", label: "Metodologia" },
  { href: "/portfolio", label: "Projectos" },
  { href: "/formacao", label: "Formação" },
  { href: "/sobre", label: "A NexoVibe" },
];
export default function Navbar({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", closeOutside);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Saltar para o conteúdo
      </a>
      <nav ref={nav} className="container nav-inner" aria-label="Navegação principal">
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
        <a className="nav-contact" href={active === "/convites" ? "/convites#pedido" : "/#contacto"}>
          {active === "/convites" ? "Pedir convite" : "Solicitar proposta"} <span aria-hidden="true">↗</span>
        </a>
        <LanguageSwitcher />
        <button
          ref={menuButton}
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className="menu-toggle-lines" aria-hidden="true" />
        </button>
        <div
          id="mobile-navigation"
          className="mobile-nav"
          hidden={!open}
          onClick={(event) => {
            // The panel fills the screen, so a tap on its empty area counts as a tap outside the menu.
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setOpen(false)}
              aria-current={active === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a href={active === "/convites" ? "/convites#pedido" : "/#contacto"} style={{ "--i": links.length } as React.CSSProperties} onClick={() => setOpen(false)}>
            {active === "/convites" ? "Pedir convite ↗" : "Solicitar proposta ↗"}
          </a>
        </div>
      </nav>
    </header>
  );
}
