import Link from "next/link";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/site";
type Crumb = { href: string; label: string };
// Visible trail plus BreadcrumbList data. The last item is the current page and is not a link.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ href: "/", label: "Início" }, ...items];
  return (
    <nav className="breadcrumbs" aria-label="Trilha de navegação">
      <ol>
        {trail.map((item, index) => (
          <li key={item.href}>
            {index < trail.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: absoluteUrl(item.href) })),
      }} />
    </nav>
  );
}
