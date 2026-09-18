import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="wordmark">
            NexoVibe<span className="wordmark-dot">.</span>
          </Link>
          <p>Inteligência em dados. Soluções para organizações.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/Jubilio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a href="/sobre">Sobre a marca</a>
          <a href="mailto:jubilio@nexovibe.co.mz">Email ↗</a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} NexoVibe · Moçambique
        </span>
      </div>
    </footer>
  );
}
