import Image from "next/image";

export default function Logo({
  variant = "ink",
  className = "h-7 w-auto",
}: {
  variant?: "ink" | "white";
  className?: string;
}) {
  const src = variant === "white" ? "/brand/logo-white.png" : "/brand/logo-ink.png";
  return (
    <Image
      src={src}
      alt="Known For"
      width={4189}
      height={705}
      priority
      className={className}
    />
  );
}
