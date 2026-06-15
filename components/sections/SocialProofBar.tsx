const badges = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2C5.134 2 2 5.134 2 9s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Fully local — runs in your browser",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "No server receives your articles",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2l1.5 4.5H15l-3.75 2.75 1.5 4.5L9 11l-3.75 2.75 1.5-4.5L3 6.5h4.5L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    text: "No account required to download EPUB",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 9h10M4 5h10M4 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Clean reading — ads & menus removed",
  },
];

export default function SocialProofBar() {
  return (
    <section className="bg-parchment border-y border-border py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <li
              key={badge.text}
              className="flex items-center gap-2 text-ink-light text-sm"
            >
              <span className="text-sage">{badge.icon}</span>
              {badge.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
