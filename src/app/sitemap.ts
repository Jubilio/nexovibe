import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/sobre", "/portfolio", "/convites", "/privacidade", "/relatorio-exemplo", "/xlsform-translator/privacy", "/xlsform-translator/terms", "/xlsform-translator/support", "/xlsform-translator/user-guide", ...caseStudies.map(item => `/portfolio/${item.slug}`)];
  const origin = "https://nexovibe.netlify.app";
  return paths.flatMap(path => {
    const pt = `${origin}${path || "/"}`;
    const en = `${origin}/en${path}`;
    return [pt, en].map(url => ({ url, alternates: { languages: { "pt-MZ": pt, en } } }));
  });
}
