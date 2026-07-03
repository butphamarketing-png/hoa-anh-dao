import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted";
  id?: string;
}

export function Section({ children, className, variant = "default", id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        variant === "muted" ? "bg-section" : "bg-white",
        className
      )}
    >
      {children}
    </section>
  );
}
