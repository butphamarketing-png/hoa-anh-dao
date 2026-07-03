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
  sm: 44,
  md: 52,
  lg: 60,
};

export function Logo({ size = "md", showText = true, light = false, className }: LogoProps) {
  const px = sizeMap[size];

  return (
    <Link href="/" className={cn("notranslate flex shrink-0 items-center gap-3", className)}>
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
              "font-heading text-sm font-bold uppercase leading-tight tracking-wide lg:text-[0.9375rem]",
              light ? "text-white" : "text-primary-green"
            )}
          >
            HOA ANH ĐÀO
          </p>
          <p
            className={cn(
              "font-body text-xs tracking-wide",
              light ? "text-white/70" : "text-foreground/55"
            )}
          >
            Mầm Non
          </p>
        </div>
      )}
    </Link>
  );
}
