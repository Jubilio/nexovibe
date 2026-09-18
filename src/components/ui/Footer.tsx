import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="wordmark">
            NexoVibe<span className="wordmark-dot">.</span>
          </Link>
          <p>Dados, território e tecnologia. Por Jubílio Maússe.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/Jubilio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/jubilio-mausse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:jubilio@nexovibe.co.mz">Email ↗</a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} NexoVibe · Moçambique
        </span>
      </div>
    </footer>
  );
}
