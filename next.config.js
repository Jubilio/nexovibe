const previewFrame = process.env.CONTEXT === "deploy-preview" ? "frame-src https://app.netlify.com" : "frame-src 'none'";
const csp = (scanner = false) => [
  "default-src 'self'", "base-uri 'self'", "object-src 'none'", "frame-ancestors 'none'",
  "form-action 'self'", "script-src 'self' 'unsafe-inline'", "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:", "font-src 'self'", previewFrame,
  scanner ? "connect-src 'self' https:" : "connect-src 'self'", "upgrade-insecure-requests",
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
      // Scanner deliberately contacts the visitor's authorised HTTPS endpoint.
      { source: "/ai-security-scanner/:path*", headers: [{ key: "Content-Security-Policy", value: csp(true) }] },
      { source: "/api/:path*", headers: [{ key: "Cache-Control", value: "no-store" }] },
    ];
  },
};
