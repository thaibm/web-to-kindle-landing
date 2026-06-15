import StepItem from "@/components/ui/StepItem";

const steps = [
  {
    title: "Open any article in Chrome",
    description:
      "Navigate to the blog post, news article, or long-form page you want to read on your Kindle.",
  },
  {
    title: "Click the extension icon",
    description:
      'Click the Send Web to Kindle icon in your toolbar, or right-click the page and choose "Save article as EPUB". To save only part of a page, select text first.',
  },
  {
    title: "Review the clean preview",
    description:
      "The side panel opens with a distraction-free version of the article. Edit the title or author if you like.",
  },
  {
    title: "Download or send to Kindle",
    description:
      'Click "Download EPUB" to save the file — no login needed. Or click "Send to Kindle" to deliver it directly via Gmail (requires one-time Gmail setup).',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-parchment" id="how-it-works">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
            How it works
          </h2>
          <p className="text-ink-light text-lg">
            From page to Kindle in four simple steps.
          </p>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <StepItem
              key={step.title}
              number={i + 1}
              title={step.title}
              description={step.description}
              accent="amber"
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
