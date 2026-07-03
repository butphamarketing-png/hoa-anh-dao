import { cn } from "@/lib/utils";

interface PaperTextureProps {
  className?: string;
  variant?: "default" | "warm" | "muted";
}

const variantOpacity = {
  default: 1,
  warm: 0.85,
  muted: 0.9,
};

export function PaperTexture({ className, variant = "default" }: PaperTextureProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
      style={{
        opacity: variantOpacity[variant],
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E"),
          radial-gradient(ellipse 80% 60% at 15% 20%, rgba(255,249,229,0.55) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 85% 75%, rgba(248,255,248,0.35) 0%, transparent 50%)
        `,
        backgroundSize: "200px 200px, 100% 100%, 100% 100%",
      }}
    />
  );
}
