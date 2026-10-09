"use client";
import { usePathname } from "next/navigation";
export default function LanguageSwitcher() {
  const pathname = usePathname();
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const base = english ? pathname.slice(3) || "/" : pathname;
  return <nav className="language-switch" aria-label={english ? "Language" : "Idioma"}>
    <a href={base} lang="pt-MZ" hrefLang="pt-MZ" aria-current={!english ? "page" : undefined}>PT</a>
    <a href={base === "/" ? "/en" : `/en${base}`} lang="en" hrefLang="en" aria-current={english ? "page" : undefined}>EN</a>
  </nav>;
}
