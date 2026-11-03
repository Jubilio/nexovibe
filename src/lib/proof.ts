// Client proof: results and reviews. Both lists stay EMPTY until there is real, verifiable
// material with the client's permission. Never add invented clients, quotes, ratings or numbers.
// When an item is added, its section appears on the home page with matching structured data,
// and its texts must be added to locales/en.json.
export type ClientResult = {
  client: string; // Organisation name, as authorised by the client.
  sector: string; // e.g. "ONG · Saúde"
  challenge: string;
  work: string;
  result: string; // A concrete, checkable outcome (date, number, deliverable).
  href?: string; // Optional public link to the deliverable or a case-study page.
};
export type Testimonial = {
  quote: string;
  author: string; // Real name, as authorised.
  role: string; // Role and organisation.
  date: string; // ISO date of the review, e.g. "2026-11-20".
  rating?: 1 | 2 | 3 | 4 | 5; // Only if the client gave a rating.
  source?: string; // Where the review can be checked (e.g. LinkedIn recommendation URL).
};
export const clientResults: ClientResult[] = [];
export const testimonials: Testimonial[] = [];
