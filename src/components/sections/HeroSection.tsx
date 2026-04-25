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
    <section id="inicio" className="relative isolate overflow-hidden bg-[#FDF5F0]">
      {/* Mobile image layer */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-0 h-[470px] overflow-hidden sm:h-[500px] lg:hidden">
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[78%_center] sm:object-[74%_center]"
        />
        <div className="absolute inset-x-0 top-0 z-[1] h-44 bg-gradient-to-b from-[#FDF5F0] via-[#FDF5F0]/60 to-transparent sm:h-48" />
        <div className="absolute inset-y-0 left-0 z-[1] w-[72%] bg-gradient-to-r from-[#FDF5F0] via-[#FDF5F0]/45 to-transparent sm:w-[62%]" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-[#FDF5F0] via-[#FDF5F0]/20 to-transparent" />
      </div>

      {/* Mobile content */}
      <div className="relative z-10 flex flex-col px-5 pb-[430px] pt-20 sm:px-10 sm:pb-[455px] sm:pt-20 lg:hidden">
        <div className="relative z-10 w-full max-w-[34rem]">
          <p className="mb-4 font-body text-xs font-semibold uppercase text-brand-lavender sm:text-sm">
            {content.eyebrow}
          </p>
          <h1 className="text-[clamp(3.3rem,14.5vw,4.35rem)] font-semibold leading-[0.88] text-brand-taupe sm:text-7xl">
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
          <p className="mt-5 max-w-[32rem] text-[0.98rem] leading-7 text-brand-taupe/85 sm:mt-6 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-8 z-10 flex flex-col gap-2.5 sm:inset-x-10 sm:bottom-10 sm:flex-row sm:gap-3 lg:hidden">
        <ButtonLink
          href={content.primaryCta.href}
          className="!min-h-11 !py-2.5 w-full px-6 sm:w-auto"
        >
          {content.primaryCta.label}
        </ButtonLink>
        <ButtonLink
          href={content.secondaryCta.href}
          variant="secondary"
          className="!min-h-11 !py-2.5 w-full px-6 sm:w-auto"
        >
          {content.secondaryCta.label}
        </ButtonLink>
      </div>

      {/* Desktop */}
      <div className="relative z-10 hidden lg:flex lg:min-h-[calc(100vh-104px)] lg:items-center">
        {/* Text container */}
        <div className="relative z-10 max-w-4xl flex-shrink-0 py-10 pl-32 pr-8">
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
      </div>

      {/* Desktop image layer */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden lg:block lg:w-[58vw]">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden">
          <img
            src={content.heroImage}
            alt={content.heroImageAlt}
            className="h-full w-full object-cover object-[64%_center]"
          />
        </div>
        <div className="absolute inset-y-0 left-0 z-[1] w-[46%] bg-gradient-to-r from-[#FDF5F0] via-[#FDF5F0]/75 to-transparent" />
        <div className="absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-[#FDF5F0]/70 to-transparent" />
      </div>
    </section>
  );
}
