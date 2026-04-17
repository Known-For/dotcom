export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Known For"
    >
      <text
        x="0"
        y="30"
        fontFamily="Radley, Georgia, serif"
        fontSize="32"
        fill="currentColor"
      >
        Known For
      </text>
    </svg>
  );
}
