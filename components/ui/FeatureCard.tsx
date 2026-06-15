interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-parchment border border-border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
      <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center text-amber">
        {icon}
      </div>
      <h3 className="font-[var(--font-lora)] text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="text-ink-light text-sm leading-relaxed">{description}</p>
    </div>
  );
}
