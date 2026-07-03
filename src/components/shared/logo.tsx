import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  light?: boolean;
  className?: string;
}

const sizeMap = {
  sm: 40,
  md: 48,
  lg: 56,
};

export function Logo({ size = "md", showText = true, light = false, className }: LogoProps) {
  const px = sizeMap[size];

  return (
    <Link href="/" className={cn("flex shrink-0 items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="Trường Mầm Non Hoa Anh Đào"
        width={px}
        height={px}
        className="h-auto w-auto object-contain"
        style={{ width: px, height: px }}
        priority
      />
      {showText && (
        <div className="hidden sm:block">
          <p
            className={cn(
              "font-heading text-sm font-bold leading-tight lg:text-base",
              light ? "text-white" : "text-primary-green"
            )}
          >
            HOA ANH ĐÀO
          </p>
          <p
            className={cn(
              "font-body text-xs",
              light ? "text-white/70" : "text-foreground/60"
            )}
          >
            Mầm Non
          </p>
        </div>
      )}
    </Link>
  );
}
