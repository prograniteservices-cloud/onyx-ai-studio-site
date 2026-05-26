import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleAs?: "h1" | "h2";
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAs = "h2",
  description,
  className,
}: SectionHeadingProps) {
  const TitleTag = titleAs;

  return (
    <div className={cn("min-w-0 max-w-3xl", className)}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <TitleTag className="mt-3 font-serif text-[1.8rem] font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
