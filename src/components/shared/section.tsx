import { cn } from "@/lib/utils";
import { WavyDivider } from "@/components/shared/wavy-divider";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "warm";
  id?: string;
  wave?: boolean;
}

const variantStyles = {
  default: "bg-white",
  muted: "bg-section",
  warm: "bg-warm",
};

const waveFill = {
  default: "#FFFFFF",
  muted: "#F8FFF8",
  warm: "#FFF9E5",
};

export function Section({
  children,
  className,
  variant = "default",
  id,
  wave = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-12 lg:py-16", variantStyles[variant], className)}>
      {wave && <WavyDivider fill={waveFill[variant]} className="absolute left-0 top-0 w-full" />}
      {children}
    </section>
  );
}
