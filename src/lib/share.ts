import type { Metadata } from "next";

/** Static PNGs are readable by crawlers without JavaScript or image generation. */
export function shareMetadata(path: string, title: string, description: string, image: string): Pick<Metadata, "openGraph" | "twitter"> {
  const english = path === "/en" || path.startsWith("/en/");
  const preview = { url: `/social/${english ? "en" : "pt"}/${image}.png`, width: 1200, height: 630, alt: title, type: "image/png" };
  return {
    openGraph: { title, description, url: path, siteName: "NexoVibe", type: "website", locale: english ? "en_GB" : "pt_MZ", images: [preview] },
    twitter: { card: "summary_large_image", title, description, images: [preview] },
  };
}
