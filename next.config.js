const previewFrame = process.env.CONTEXT === "deploy-preview" ? "frame-src https://app.netlify.com" : "frame-src 'none'";
// Google Analytics hosts are allowed only when a GA4 measurement ID is configured.
const analytics = /^G-[A-Z0-9]{4,}$/.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "");
const gaScript = analytics ? " https://www.googletagmanager.com" : "";
const gaConnect = analytics ? " https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com" : "";
const csp = () => [
  "default-src 'self'", "base-uri 'self'", "object-src 'none'", "frame-ancestors 'none'",
  "form-action 'self'", `script-src 'self' 'unsafe-inline'${gaScript}`, "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob:${gaConnect}`, "font-src 'self'", previewFrame,
  `connect-src 'self'${gaConnect}`, "upgrade-insecure-requests",
].join("; ");
const common = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  // No pages require the remote image optimiser.
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/:path*", headers: [...common, { key: "Content-Security-Policy", value: csp() }] },
      { source: "/api/:path*", headers: [{ key: "Cache-Control", value: "no-store" }] },
    ];
  },
};
