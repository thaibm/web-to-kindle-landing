import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 5h12M4 9h8M4 13h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Distraction-free extraction",
    description:
      "Strips menus, footers, sidebars, and ads using Defuddle — leaving only the article you actually want to read.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 7h6M7 10h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 13l1.5-1.5L10 13l2-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "EPUB generated in-browser",
    description:
      "Creates valid EPUB files client-side with preserved headings, lists, tables, code blocks, and embedded images.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 7h6M7 10h4M7 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13 9v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Auto table of contents",
    description:
      "Builds a navigable table of contents from article headings automatically — perfect for long-form reads.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 7h6M7 10h6M7 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Live preview in side panel",
    description:
      "Review the cleaned article in Chrome's side panel before saving — edit the title and author to your liking.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v10M7 10l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 15h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Save selections as EPUB",
    description:
      "Select any text on a page and convert just that passage to EPUB — great for research snippets or long threads.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 10l7-7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="5" y="12" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Send directly to Kindle",
    description:
      "Optionally deliver EPUBs straight to your Kindle email using your connected Gmail account — one click away.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 px-4 sm:px-6" id="features">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
            Everything you need for better reading
          </h2>
          <p className="text-ink-light text-lg max-w-xl mx-auto">
            One extension. Clean articles. Your Kindle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
