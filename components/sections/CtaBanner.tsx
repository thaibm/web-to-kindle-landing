import Button from "@/components/ui/Button";

const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export default function CtaBanner() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
        <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
          Start reading better today
        </h2>
        <p className="text-ink-light text-lg">
          Free, open, and private. Add it to Chrome in seconds — no account, no
          server, no tracking.
        </p>
        <div className="flex justify-center">
          <Button
            href={CWS_URL}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M10 2a8 8 0 010 16" stroke="currentColor" strokeWidth="1.6" opacity="0" />
              <path d="M2 10h5M13 10h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Add to Chrome — Free
          </Button>
        </div>
      </div>
    </section>
  );
}
