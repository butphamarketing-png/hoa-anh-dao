import { cn } from "@/lib/utils";
import { WavyDivider } from "@/components/shared/wavy-divider";
import { ScallopedDivider, SectionCornerDecor, DotPattern } from "@/components/shared/decorations";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "warm";
  id?: string;
  wave?: boolean;
  scallop?: boolean;
  decor?: boolean;
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
  scallop = false,
  decor = false,
}: SectionProps) {
  const decorVariant = variant === "warm" ? "warm" : variant === "muted" ? "light" : "light";

  return (
    <section id={id} className={cn("relative overflow-hidden py-6 lg:py-8", variantStyles[variant], className)}>
      {scallop && (
        <ScallopedDivider fill={waveFill[variant]} className="absolute left-0 top-0 w-full" />
      )}
      {wave && !scallop && (
        <WavyDivider fill={waveFill[variant]} className="absolute left-0 top-0 w-full" />
      )}
      {decor && (
        <>
          <DotPattern color={variant === "warm" ? "#D61F8C" : "#00A651"} opacity={0.04} />
          <SectionCornerDecor variant={decorVariant} showLeaf={variant === "warm"} />
        </>
      )}
      {children}
    </section>
  );
}
