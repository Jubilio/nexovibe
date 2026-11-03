import { notFound } from "next/navigation";
// Unknown addresses render the branded 404 page (not-found.tsx) inside the site layout.
export default function Missing() {
  notFound();
}
