import type { HeroContent } from "../../types/content";
import { ButtonLink } from "../ui/ButtonLink";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const titleWords = content.title.trim().split(/\s+/);
  const accentWord = titleWords.length > 1 ? titleWords.pop() : undefined;
  const baseTitle = titleWords.join(" ");

  return (
    <section id="inicio" className="overflow-hidden bg-brand-cream">
      {/* Mobile */}
      <div className="flex flex-col items-center justify-center px-5 py-12 sm:px-10 sm:py-16 lg:hidden">
        <div className="relative z-10 w-full">
          <p className="mb-5 font-body text-sm font-semibold uppercase text-brand-lavender">
            {content.eyebrow}
          </p>
          <h1 className="text-6xl font-semibold leading-[0.9] text-brand-taupe sm:text-7xl">
            {accentWord ? (
              <>
                {baseTitle}{" "}
                <span className="block font-heading italic text-brand-lavender">
                  {accentWord}
                </span>
              </>
            ) : (
              content.title
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-brand-taupe/85 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={content.primaryCta.href} className="px-8">
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 w-full overflow-hidden rounded-lg sm:rounded-lg">
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none hero-image-overlay-mobile"></div>
            <img
              src={content.heroImage}
              alt={content.heroImageAlt}
              className="w-full aspect-[4/5] object-cover object-[62%_center] sm:aspect-[16/9]"
            />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex lg:items-center lg:min-h-[calc(100vh-104px)] relative">
        {/* Text container */}
        <div className="flex-shrink-0 pl-32 pr-8 py-10 max-w-4xl relative z-10">
          <p className="mb-5 font-body text-sm font-semibold uppercase text-brand-lavender">
            {content.eyebrow}
          </p>
          <h1 className="text-[6.8rem] font-semibold leading-[0.9] text-brand-taupe">
            {accentWord ? (
              <>
                {baseTitle}{" "}
                <span className="block font-heading italic text-brand-lavender">
                  {accentWord}
                </span>
              </>
            ) : (
              content.title
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-taupe/85">
            {content.description}
          </p>
          <div className="mt-9 flex flex-row gap-3">
            <ButtonLink href={content.primaryCta.href} className="px-8">
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        {/* Image container - extends to right edge with fade */}
        <div className="absolute right-0 top-0 bottom-0 w-[55vw] overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 pointer-events-none hero-image-overlay"></div>
            <img
              src={content.heroImage}
              alt={content.heroImageAlt}
              className="w-full h-full object-cover object-[62%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
