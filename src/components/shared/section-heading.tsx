import { HandDrawnStroke } from "@/components/shared/decorations";
import {
  BlossomBranchArt,
  BooksStackArt,
  ChildReadingArt,
} from "@/components/shared/line-art-illustrations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  light?: boolean;
  showArt?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  label,
  centered = true,
  light = false,
  showArt = true,
}: SectionHeadingProps) {
  return (
    <div className={cnWrapper(centered)}>
      {showArt && !light && (
        <>
          <ChildReadingArt
            className="absolute -left-2 top-0 hidden opacity-60 md:block lg:-left-8"
            size={72}
          />
          <BooksStackArt
            className="absolute -right-2 top-1 hidden opacity-55 md:block lg:-right-6"
            size={64}
          />
          <BlossomBranchArt
            className="absolute -right-4 -top-4 hidden opacity-50 lg:block xl:-right-10"
            size={90}
          />
        </>
      )}

      {label && (
        <p className={`section-label ${light ? "text-white/80" : ""}`}>{label}</p>
      )}
      <h2 className={`section-title mt-2 ${light ? "text-white" : ""}`}>{title}</h2>
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

function cnWrapper(centered: boolean) {
  return centered
    ? "relative mx-auto max-w-3xl px-8 text-center md:px-12 lg:px-16"
    : "relative max-w-3xl px-8 md:px-12";
}
