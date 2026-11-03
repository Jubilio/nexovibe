"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/contact";
// Fixed contact bar on phones. It appears after the first screen and hides while another
// primary button (hero, form, pilot) is visible, so there is never more than one on screen.
// While hidden, CSS sets visibility: hidden, which also removes it from the tab order.
export default function MobileCta() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const invitations = pathname === "/convites";
  const hidden = pathname === "/obrigado";
  useEffect(() => {
    if (hidden) return;
    const visible = new Set<Element>();
    let scrolled = false;
    const update = () => setShow(scrolled && visible.size === 0);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      update();
    });
    document.querySelectorAll(".button-primary:not(.mobile-cta .button), #contacto, #pedido").forEach(el => observer.observe(el));
    const onScroll = () => {
      const next = window.scrollY > window.innerHeight * 0.6;
      if (next !== scrolled) { scrolled = next; update(); }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [hidden, pathname]);
  if (hidden) return null;
  return (
    <div className="mobile-cta" data-visible={show}>
      <a className="button button-primary" href={invitations ? "/convites#pedido" : "/#contacto"}>
        {invitations ? "Pedir convite" : "Solicitar proposta"} <span aria-hidden="true">↗</span>
      </a>
      <a className="button button-secondary mobile-cta-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <p>Resposta em 1 dia útil</p>
    </div>
  );
}
