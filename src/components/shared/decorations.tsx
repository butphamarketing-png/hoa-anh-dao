import { cn } from "@/lib/utils";
export function CherryBlossomArt({
  className,
  size = 120,
  opacity = 0.15,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" stroke="#D61F8C" strokeWidth="1.2" strokeLinecap="round">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="32"
            rx="7"
            ry="13"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="3.5" />
        {[0, 72, 144, 216, 288].map((deg) => (
          <line
            key={`l-${deg}`}
            x1="50"
            y1="50"
            x2="50"
            y2="22"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
    </svg>
  );
}

/* ─── Young leaf line art ─── */

export function LeafArt({
  className,
  size = 90,
  opacity = 0.12,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        fill="none"
        stroke="#00A651"
        strokeWidth="1.2"
        strokeLinecap="round"
        d="M40,70 Q40,40 40,15 Q20,30 15,45 Q30,35 40,70 Q50,35 65,45 Q60,30 40,15"
      />
      <line x1="40" y1="15" x2="40" y2="70" stroke="#00A651" strokeWidth="0.8" />
    </svg>
  );
}

/* ─── Soft cloud shape ─── */

export function SoftCloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={cn("pointer-events-none w-[160px] opacity-[0.12] md:w-[200px]", className)}
      aria-hidden="true"
    >
      <path
        fill="white"
        d="M30,55 Q10,55 10,40 Q10,25 28,22 Q32,8 50,8 Q62,8 68,18 Q82,12 95,22 Q110,15 125,25 Q145,18 160,32 Q180,28 185,45 Q195,50 190,60 Q195,72 175,72 L40,72 Q20,72 20,58 Q15,55 30,55 Z"
      />
    </svg>
  );
}

/* ─── Organic blob ─── */

export function OrganicBlob({
  className,
  color = "#D61F8C",
  opacity = 0.08,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={cn("pointer-events-none w-[140px] md:w-[180px]", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        fill={color}
        d="M100,10 C130,5 170,25 185,55 C195,80 180,110 155,130 C125,155 75,155 45,135 C15,115 5,80 20,50 C35,20 70,15 100,10 Z"
      />
    </svg>
  );
}

/* ─── Dot pattern background ─── */

export function DotPattern({
  className,
  color = "#00A651",
  opacity = 0.06,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
      style={{
        opacity,
        backgroundImage: `radial-gradient(${color} 1.5px, transparent 1.5px)`,
        backgroundSize: "20px 20px",
      }}
    />
  );
}

/* ─── Gradient orb (blurred circle) ─── */

export function GradientOrb({
  className,
  color = "#00A651",
  size = 200,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0.12,
      }}
    />
  );
}

/* ─── Hand-drawn stroke underline ─── */

export function HandDrawnStroke({
  className,
  centered = true,
  color = "#D61F8C",
}: {
  className?: string;
  centered?: boolean;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 8"
      className={cn(
        "mt-3 h-2 w-24",
        centered && "mx-auto",
        className
      )}
      aria-hidden="true"
    >
      <path
        d="M2,5 Q30,1 60,4 T118,3"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="8" cy="4" r="1.5" fill={color} opacity="0.4" />
      <circle cx="112" cy="3" r="1" fill={color} opacity="0.3" />
    </svg>
  );
}

/* ─── Scalloped wave divider (Small Wonder style) ─── */

export function ScallopedDivider({
  fill = "#FFF9E5",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none w-full leading-[0]",
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 32"
        preserveAspectRatio="none"
        className="block h-6 w-full md:h-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 L0,16 Q30,0 60,16 Q90,32 120,16 Q150,0 180,16 Q210,32 240,16 Q270,0 300,16 Q330,32 360,16 Q390,0 420,16 Q450,32 480,16 Q510,0 540,16 Q570,32 600,16 Q630,0 660,16 Q690,32 720,16 Q750,0 780,16 Q810,32 840,16 Q870,0 900,16 Q930,32 960,16 Q990,0 1020,16 Q1050,32 1080,16 Q1110,0 1140,16 Q1170,32 1200,16 Q1230,0 1260,16 Q1290,32 1320,16 Q1350,0 1380,16 Q1410,32 1440,16 L1440,32 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/* ─── Single falling petal SVG ─── */

function PetalSvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 12 14" style={style} aria-hidden="true">
      <ellipse cx="6" cy="7" rx="4" ry="6" fill="#D61F8C" opacity="0.35" transform="rotate(-15 6 7)" />
    </svg>
  );
}

/* ─── Falling petals animation ─── */

const PETAL_CONFIG = [
  { left: "8%", delay: "0s", duration: "14s", size: 10 },
  { left: "18%", delay: "2s", duration: "18s", size: 8 },
  { left: "32%", delay: "4s", duration: "16s", size: 12 },
  { left: "48%", delay: "1s", duration: "20s", size: 9 },
  { left: "62%", delay: "6s", duration: "15s", size: 11 },
  { left: "75%", delay: "3s", duration: "17s", size: 8 },
  { left: "88%", delay: "5s", duration: "19s", size: 10 },
  { left: "95%", delay: "7s", duration: "16s", size: 7 },
];

export function FallingPetals({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {PETAL_CONFIG.map((p, i) => (
        <div
          key={i}
          className="petal-fall absolute top-0"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          <PetalSvg style={{ width: p.size, height: p.size }} />
        </div>
      ))}
    </div>
  );
}

/* ─── Corner decorations for sections ─── */

export function SectionCornerDecor({
  variant = "warm",
  showLeaf = false,
}: {
  variant?: "warm" | "light" | "green";
  showLeaf?: boolean;
}) {
  const blossomOpacity = variant === "green" ? 0.12 : 0.15;

  return (
    <>
      <CherryBlossomArt
        className="absolute -left-2 top-6 hidden sm:block md:left-4"
        size={100}
        opacity={blossomOpacity}
      />
      <CherryBlossomArt
        className="absolute -right-2 top-10 rotate-45 hidden sm:block md:right-4"
        size={80}
        opacity={blossomOpacity * 0.8}
      />
      {showLeaf && (
        <LeafArt
          className="absolute bottom-8 left-6 hidden md:block"
          size={70}
          opacity={0.1}
        />
      )}
    </>
  );
}

/* ─── Rounded geometric accent ─── */

export function RoundedGeoAccent({
  className,
  color = "#27B5E6",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute rounded-full", className)}
      aria-hidden="true"
      style={{ background: color, opacity: 0.08, width: 64, height: 64 }}
    />
  );
}
