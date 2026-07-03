import { cn } from "@/lib/utils";

type LineArtProps = {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
};

/** Bé kéo xe đựng sách — phong cách Cánh Diều */
export function ChildWithCartArt({
  className,
  size = 200,
  color = "#D61F8C",
  opacity = 0.85,
}: LineArtProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      width={size}
      height={(size * 120) / 200}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Bé */}
        <circle cx="42" cy="28" r="9" />
        <path d="M42 37 L42 58" />
        <path d="M42 44 L32 52" />
        <path d="M42 44 L50 48" />
        <path d="M42 58 L36 72" />
        <path d="M42 58 L48 72" />
        <path d="M50 48 L58 52" />
        {/* Xe kéo */}
        <path d="M58 52 L68 58 L68 78 L58 78 Z" />
        <path d="M68 58 L110 58 L110 78 L68 78" />
        <circle cx="76" cy="82" r="5" />
        <circle cx="102" cy="82" r="5" />
        {/* Sách trên xe */}
        <rect x="72" y="48" width="14" height="11" rx="1" />
        <path d="M72 51 L86 51" />
        <rect x="88" y="46" width="12" height="13" rx="1" />
        <path d="M88 50 L100 50" />
        {/* Búp bê nhỏ */}
        <circle cx="104" cy="50" r="4" />
        <path d="M104 54 L104 58" />
        {/* Lá trang trí */}
        <path d="M18 90 Q22 75 30 80 Q24 88 18 90" stroke="#00A651" strokeWidth="1.2" />
        <path d="M155 35 Q165 28 172 38 Q162 40 155 35" stroke="#00A651" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

/** Chồng sách line-art */
export function BooksStackArt({
  className,
  size = 90,
  color = "#00A651",
  opacity = 0.75,
}: LineArtProps) {
  return (
    <svg
      viewBox="0 0 80 90"
      width={size}
      height={(size * 90) / 80}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="55" width="56" height="12" rx="2" />
        <path d="M12 61 L68 61" />
        <rect x="16" y="40" width="48" height="12" rx="2" />
        <path d="M16 46 L64 46" />
        <rect x="20" y="25" width="40" height="12" rx="2" />
        <path d="M20 31 L60 31" />
        <path d="M40 25 L40 18" stroke="#D61F8C" />
        <circle cx="40" cy="15" r="3" fill="#D61F8C" stroke="#D61F8C" strokeWidth="1" />
      </g>
    </svg>
  );
}

/** Hoa anh đào cành — cho tiêu đề section */
export function BlossomBranchArt({
  className,
  size = 100,
  opacity = 0.7,
}: Omit<LineArtProps, "color">) {
  return (
    <svg
      viewBox="0 0 100 80"
      width={size}
      height={(size * 80) / 100}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" strokeLinecap="round">
        <path
          d="M10 70 Q35 55 55 35 Q70 20 88 12"
          stroke="#00A651"
          strokeWidth="1.4"
        />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${55 + i * 12}, ${28 + i * 8})`}>
            {[0, 72, 144, 216, 288].map((deg) => (
              <ellipse
                key={deg}
                cx="0"
                cy="-6"
                rx="4"
                ry="7"
                stroke="#D61F8C"
                strokeWidth="1.2"
                transform={`rotate(${deg})`}
              />
            ))}
            <circle cx="0" cy="0" r="2" fill="#D61F8C" stroke="#D61F8C" strokeWidth="0.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Bé đọc sách — nhỏ gọn cho section heading */
export function ChildReadingArt({
  className,
  size = 80,
  color = "#D61F8C",
  opacity = 0.7,
}: LineArtProps) {
  return (
    <svg
      viewBox="0 0 90 80"
      width={size}
      height={(size * 80) / 90}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="45" cy="18" r="8" />
        <path d="M45 26 L45 48" />
        <path d="M45 34 L32 42" />
        <path d="M45 34 L58 42" />
        <path d="M32 42 L28 50 L38 50 Z" stroke="#00A651" />
        <path d="M58 42 L54 50 L64 50 Z" stroke="#00A651" />
        <path d="M45 48 L38 62" />
        <path d="M45 48 L52 62" />
        <path d="M35 55 Q45 50 55 55" stroke="#00A651" strokeWidth="1.2" />
      </g>
    </svg>
  );
}
