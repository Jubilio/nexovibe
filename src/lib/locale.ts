export function localeAlternates(path: string) {
  const pt = path === "/en" ? "/" : path.startsWith("/en/") ? path.slice(3) : path;
  return { canonical: path, languages: { "pt-MZ": pt, en: pt === "/" ? "/en" : `/en${pt}`, "x-default": pt } };
}
