interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl font-body text-base md:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-foreground/70"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-primary-pink ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
