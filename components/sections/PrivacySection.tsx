const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4L5 8v7c0 5 3.9 9.7 9 11 5.1-1.3 9-6 9-11V8L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Local processing only",
    description:
      "EPUB files are generated entirely inside your browser. Your article content never leaves your device or touches an app server.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <ellipse cx="14" cy="9" rx="8" ry="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 9v5c0 2.2 3.6 4 8 4s8-1.8 8-4V9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 14v5c0 2.2 3.6 4 8 4s8-1.8 8-4v-5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M18 20l4 4M22 20l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "No data collection",
    description:
      "We do not collect, analyze, sell, or store your browsing history or article content. Settings like your Kindle email are stored locally in Chrome's storage only.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="12" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 12V9a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Minimal permissions",
    description:
      "Google sign-in is optional and only requests gmail.send — it cannot read your inbox. The extension only accesses the active tab when you explicitly trigger it.",
  },
];

export default function PrivacySection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-parchment" id="privacy">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
            Your privacy, by design
          </h2>
          <p className="text-ink-light text-lg max-w-xl mx-auto">
            Built to work without ever touching a server. Your articles stay yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-cream border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="text-sage">{pillar.icon}</div>
              <h3 className="font-[var(--font-lora)] text-lg font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="text-ink-light text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
