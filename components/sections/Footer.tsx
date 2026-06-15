const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-light">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="#C27B2C" />
            <path
              d="M7 8h14M7 12h10M7 16h12M7 20h8"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-[var(--font-lora)] font-semibold text-ink">
            Send Web to Kindle
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
          <a
            href={CWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber transition-colors"
          >
            Chrome Web Store
          </a>
          <a href="/privacy" className="hover:text-amber transition-colors">
            Privacy Policy
          </a>
        </nav>

        <p className="text-xs">
          &copy; {new Date().getFullYear()} Send Web to Kindle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
