import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  showText?: boolean;
};

export function LogoMark({ className, showText = true }: LogoMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      aria-label="Onyx AI Studio home"
    >
      <span className="grid size-10 place-items-center rounded-md border border-primary/25 bg-primary text-primary-foreground shadow-sm">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="size-7"
          fill="none"
        >
          <path d="M16 3 29 11 24 27H8L3 11 16 3Z" fill="currentColor" />
          <path
            d="M16 3 20.5 11 16 27 11.5 11 16 3Z"
            fill="#f7f4ee"
            opacity="0.88"
          />
          <path d="M3 11h26L16 27 3 11Z" fill="#0f7b75" opacity="0.64" />
        </svg>
      </span>
      {showText ? (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold tracking-normal text-current">
            Onyx
          </span>
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-current opacity-65">
            AI Studio
          </span>
        </span>
      ) : null}
    </Link>
  );
}
