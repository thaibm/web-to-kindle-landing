interface StepItemProps {
  number: number;
  title: string;
  description: string;
  accent?: "amber" | "sage";
  isLast?: boolean;
}

export default function StepItem({
  number,
  title,
  description,
  accent = "amber",
  isLast = false,
}: StepItemProps) {
  const accentClasses = {
    amber: "bg-amber text-white",
    sage: "bg-sage text-white",
  };

  return (
    <div className="flex gap-4">
      {/* Left column: circle + connector line */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${accentClasses[accent]}`}
        >
          {number}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2 mb-1" />
        )}
      </div>

      {/* Right column: content */}
      <div className="flex flex-col gap-1 pb-7">
        <h4 className="font-semibold text-ink pt-1">{title}</h4>
        <p className="text-ink-light text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
