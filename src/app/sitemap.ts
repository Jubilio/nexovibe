import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/sobre", "/portfolio", "/convites", "/privacidade", "/relatorio-exemplo", "/xlsform-translator/privacy", "/xlsform-translator/terms", "/xlsform-translator/support", "/xlsform-translator/user-guide", ...caseStudies.map(item => `/portfolio/${item.slug}`)];
  return paths.map(path => ({ url: `https://nexovibe.netlify.app${path}` }));
}
