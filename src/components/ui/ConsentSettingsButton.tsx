"use client";
import { consentOpenEvent, gaMeasurementId } from "@/lib/analytics";
// Footer link that reopens the consent banner. Hidden when Analytics is not configured.
export default function ConsentSettingsButton() {
  if (!gaMeasurementId) return null;
  return <button type="button" className="footer-button" onClick={() => window.dispatchEvent(new Event(consentOpenEvent))}>Preferências de medição</button>;
}
