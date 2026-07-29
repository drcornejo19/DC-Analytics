import Image from "next/image";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#inicio"
      aria-label="DC Analytics, volver al inicio"
      className="inline-flex items-center"
    >
      <Image
        src="/dc-analytics-logo.png"
        alt="DC Analytics"
        width={compact ? 56 : 190}
        height={64}
        priority
        className={
          compact
            ? "h-12 w-auto object-contain"
            : "h-14 w-auto object-contain"
        }
      />
    </a>
  );
}