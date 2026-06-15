import StepItem from "@/components/ui/StepItem";

const steps = [
  {
    title: "Open the extension Options page",
    description: "Click the extension icon and open Settings, or right-click the extension and choose Options.",
  },
  {
    title: "Enter your Kindle email",
    description:
      'Add your Kindle email address — typically "your-name@kindle.com" or "your-name@free.kindle.com". Find it in your Amazon account under Manage Your Content and Devices.',
  },
  {
    title: "Connect your Google account",
    description:
      "Sign in with Google so the extension can send email via Gmail on your behalf. Only the gmail.send permission is requested — the extension cannot read your inbox.",
  },
  {
    title: "Approve the sender in Amazon",
    description:
      'In your Amazon account, go to Manage Your Content and Devices → Preferences → Personal Document Settings and add your Gmail address to the "Approved Personal Document E-mail List".',
  },
  {
    title: "Send your first article",
    description:
      'Return to any article, open the extension side panel, and click "Send to Kindle". Your document will appear on your device within minutes.',
  },
];

export default function KindleSetup() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-parchment" id="kindle-setup">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
            Set up Kindle delivery
          </h2>
          <p className="text-ink-light text-lg max-w-xl mx-auto">
            One-time setup. Send any article to your Kindle with a single click after that.
          </p>
        </div>

        <div className="bg-cream border border-border rounded-2xl p-8 max-w-2xl mx-auto w-full">
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <StepItem
                key={step.title}
                number={i + 1}
                title={step.title}
                description={step.description}
                accent="sage"
                isLast={i === steps.length - 1}
              />
            ))}
          </div>

          <p className="text-ink-light text-xs mt-2 border-t border-border pt-4">
            Note: The extension confirms Gmail accepted the email. Kindle delivery depends on your Amazon approved sender settings and Amazon&apos;s document processing.
          </p>
        </div>
      </div>
    </section>
  );
}
