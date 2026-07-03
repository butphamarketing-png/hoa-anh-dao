import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProgramFlowerCardProps {
  href: string;
  image: string;
  label: string;
  className?: string;
}

export function ProgramFlowerCard({ href, image, label, className }: ProgramFlowerCardProps) {
  return (
    <Link href={href} className={cn("group flex flex-col items-center text-center", className)}>
      <div className="relative mb-5 aspect-square w-[180px] sm:w-[200px] lg:w-[220px]">
        <svg
          viewBox="0 0 220 220"
          className="absolute inset-0 h-full w-full drop-shadow-md"
          aria-hidden="true"
        >
          <path
            fill="#FFFFFF"
            d="M110,12 C118,12 122,22 130,18 C138,14 144,24 152,20 C160,16 166,26 174,24 C182,22 186,32 194,34 C196,42 206,46 204,54 C202,62 210,68 206,76 C202,84 208,92 202,98 C196,104 198,114 190,118 C182,122 180,132 170,134 C160,136 156,146 146,146 C136,146 128,154 118,152 C108,150 100,158 90,154 C80,150 70,156 62,150 C54,144 44,148 38,140 C32,132 22,134 20,124 C18,114 10,108 14,98 C18,88 12,80 18,72 C24,64 20,54 28,48 C36,42 38,32 48,28 C58,24 64,14 74,16 C84,18 92,10 102,12 C104,12 108,12 110,12 Z"
          />
        </svg>

        <div className="absolute inset-[13%] rounded-full bg-primary-green p-[5px] shadow-inner">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={image}
              alt={label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="220px"
            />
          </div>
        </div>
      </div>

      <p className="max-w-[220px] font-heading text-base font-extrabold leading-snug text-primary-green transition-colors group-hover:text-primary-pink sm:text-lg lg:text-xl">
        {label}
      </p>
    </Link>
  );
}
