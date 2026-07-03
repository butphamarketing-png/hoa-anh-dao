import { HandDrawnStroke } from "@/components/shared/decorations";

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
      <HandDrawnStroke centered={centered} color={light ? "#FFFFFF" : "#D61F8C"} />
    </div>
  );
}
