interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  label,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p className={`section-label ${centered ? "" : ""} ${light ? "text-white/80" : ""}`}>
          {label}
        </p>
      )}
      <h2
        className={`section-title mt-2 ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-[3px] w-12 rounded-full bg-primary-pink ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
