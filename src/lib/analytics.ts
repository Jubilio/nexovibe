// Google Analytics 4 is optional. It loads only when NEXT_PUBLIC_GA_MEASUREMENT_ID is a valid
// GA4 ID and the visitor accepts measurement in the consent banner.
const rawId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const gaMeasurementId = /^G-[A-Z0-9]{4,}$/.test(rawId) ? rawId : "";
export const consentStorageKey = "nexovibe-consent";
export const consentOpenEvent = "nexovibe:consent-open";
export const leadStorageKey = "nexovibe-lead";

type Gtag = (...args: unknown[]) => void;
/** Sends an event if GA is loaded (consent given); otherwise does nothing. */
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (gaMeasurementId && typeof gtag === "function") gtag("event", name, params);
}
