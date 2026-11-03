"use client";
import { useEffect } from "react";
import { leadStorageKey, trackEvent } from "@/lib/analytics";
// Records one generate_lead event per confirmed form send, so reloading or visiting
// the thank-you page directly does not inflate conversions.
export default function LeadTracker() {
  useEffect(() => {
    let service: string | null = null;
    try {
      service = sessionStorage.getItem(leadStorageKey);
      sessionStorage.removeItem(leadStorageKey);
    } catch { /* storage blocked */ }
    if (!service) return;
    // GA may still be loading right after the redirect.
    const timer = setTimeout(() => trackEvent("generate_lead", { form: "contacto", service }), 1500);
    return () => clearTimeout(timer);
  }, []);
  return null;
}
