// Netlify enforces this at the edge across function instances (not in local memory).
// Applies before the Next.js API handler; supported on all Netlify plans.
export default async function contactRateLimit() {
  // Continue to the Next.js handler when the request is within the limit.
  return undefined;
}
export const config = {
  path: "/api/contact",
  rateLimit: { windowLimit: 5, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
