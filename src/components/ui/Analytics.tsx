"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { consentOpenEvent, consentStorageKey, gaMeasurementId, trackEvent } from "@/lib/analytics";
type Consent = "granted" | "denied" | "unknown";
function readConsent(): Consent {
  try {
    const value = localStorage.getItem(consentStorageKey);
    return value === "granted" || value === "denied" ? value : "unknown";
  } catch {
    return "unknown";
  }
}
// Consent banner + GA4 loader. Renders nothing when no measurement ID is configured.
export default function Analytics() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!gaMeasurementId) return;
    const current = readConsent();
    setConsent(current);
    setOpen(current === "unknown");
    const reopen = () => setOpen(true);
    window.addEventListener(consentOpenEvent, reopen);
    return () => window.removeEventListener(consentOpenEvent, reopen);
  }, []);
  useEffect(() => {
    if (open) document.documentElement.dataset.consent = "open";
    else delete document.documentElement.dataset.consent;
  }, [open]);
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href^='https://wa.me/']");
      if (link) trackEvent("whatsapp_click", { page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);
  if (!gaMeasurementId || consent === null) return null;
  const choose = (value: "granted" | "denied") => {
    try { localStorage.setItem(consentStorageKey, value); } catch { /* storage blocked: the choice lasts for this page */ }
    // Withdrawing consent needs a reload so the already loaded script stops.
    if (value === "denied" && consent === "granted") window.location.reload();
    setConsent(value);
    setOpen(false);
  };
  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaMeasurementId}');`}
          </Script>
        </>
      )}
      {open && (
        <section className="consent-banner" role="region" aria-label="Preferências de medição">
          <p>Usamos o Google Analytics para saber que páginas ajudam os visitantes. Só é activado se aceitar. <Link href="/privacidade#medicao">Saber mais</Link>.</p>
          <div className="consent-actions">
            <button type="button" className="button button-secondary" onClick={() => choose("denied")}>Recusar</button>
            <button type="button" className="button button-secondary" onClick={() => choose("granted")}>Aceitar</button>
          </div>
        </section>
      )}
    </>
  );
}
