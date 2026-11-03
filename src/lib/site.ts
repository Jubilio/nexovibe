// Shared site facts for metadata and structured data. Only verified facts belong here.
export const siteUrl = "https://nexovibe.netlify.app";

/** Turns a site path into an absolute URL for structured data. */
export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path === "/" ? "" : path}`;
}
