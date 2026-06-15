import Button from "@/components/ui/Button";

const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
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
          <span className="font-[var(--font-lora)] font-semibold text-ink text-lg leading-tight">
            Send Web to Kindle
          </span>
        </div>
        <Button href={CWS_URL} size="sm" target="_blank" rel="noopener noreferrer">
          Add to Chrome
        </Button>
      </div>
    </header>
  );
}
