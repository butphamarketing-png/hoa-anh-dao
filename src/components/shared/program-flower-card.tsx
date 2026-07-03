import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProgramFlowerCardProps {
  href: string;
  image: string;
  label: string;
  className?: string;
  size?: "default" | "large";
}

const sizeClasses = {
  default: "w-[180px] sm:w-[200px] lg:w-[220px]",
  large: "w-[210px] sm:w-[240px] lg:w-[260px] xl:w-[280px]",
};

const labelClasses = {
  default: "max-w-[220px] text-base sm:text-lg lg:text-xl",
  large: "max-w-[280px] text-lg sm:text-xl lg:text-[1.35rem]",
};

const PETAL_COUNT = 10;

function SpinningFlowerFrame() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="flower-frame-spin absolute inset-0 h-full w-full drop-shadow-md"
      aria-hidden="true"
    >
      <g fill="#FFFFFF">
        {Array.from({ length: PETAL_COUNT }, (_, i) => (
          <ellipse
            key={i}
            cx="110"
            cy="52"
            rx="34"
            ry="50"
            transform={`rotate(${i * (360 / PETAL_COUNT)} 110 110)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function ProgramFlowerCard({
  href,
  image,
  label,
  className,
  size = "large",
}: ProgramFlowerCardProps) {
  return (
    <Link href={href} className={cn("group flex flex-col items-center text-center", className)}>
      <div className={cn("relative mb-5 aspect-square", sizeClasses[size])}>
        <SpinningFlowerFrame />

        <div className="absolute inset-[13%] rounded-full bg-primary-green p-[5px] shadow-inner">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={image}
              alt={label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={size === "large" ? "280px" : "220px"}
            />
          </div>
        </div>
      </div>

      <p
        className={cn(
          "font-display font-semibold leading-snug text-primary-green transition-colors group-hover:text-primary-pink",
          labelClasses[size]
        )}
      >
        {label}
      </p>
    </Link>
  );
}
