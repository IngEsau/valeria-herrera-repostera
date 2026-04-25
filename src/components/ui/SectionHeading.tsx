type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  decorated?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  decorated = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 font-body text-sm font-semibold uppercase text-brand-lavender">
          {eyebrow}
        </p>
      ) : null}
      {decorated ? (
        <div className="flex items-center justify-center gap-5">
          <span className="hidden h-px flex-1 bg-brand-taupe/35 sm:block" />
          <h2 className="shrink-0 text-3xl font-semibold leading-tight text-brand-taupe sm:text-4xl">
            {title}
          </h2>
          <span className="hidden h-px flex-1 bg-brand-taupe/35 sm:block" />
        </div>
      ) : (
        <h2 className="text-3xl font-semibold leading-tight text-brand-taupe sm:text-4xl">
          {title}
        </h2>
      )}
      {description ? (
        <p className="mt-4 text-base leading-8 text-brand-taupe/85 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
