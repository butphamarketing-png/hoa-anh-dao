interface WavyDividerProps {
  fill?: string;
  flip?: boolean;
  className?: string;
}

export function WavyDivider({
  fill = "#FFF9E5",
  flip = false,
  className = "",
}: WavyDividerProps) {
  return (
    <div
      className={`pointer-events-none w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="block h-8 w-full md:h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C240,0 480,48 720,32 C960,16 1200,48 1440,24 L1440,48 L0,48 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

interface BlobProps {
  className?: string;
  color?: string;
}

export function PlayfulBlob({ className = "", color = "#D61F8C" }: BlobProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none absolute opacity-20 ${className}`}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="50" fill={color} />
      <circle cx="85" cy="35" r="18" fill={color} opacity="0.6" />
      <circle cx="30" cy="80" r="12" fill={color} opacity="0.5" />
    </svg>
  );
}
