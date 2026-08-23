import type { HeroContent } from "../../types/content";
import { InstagramIcon, WhatsAppIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#FDF5F0]">
      {/* Mobile image layer */}
      <div className="pointer-events-none absolute bottom-8 inset-x-0 z-0 h-[650px] overflow-hidden sm:h-[680px] lg:hidden">
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[76%_42%] sm:object-[72%_42%]"
        />
        <div className="absolute inset-x-0 top-0 z-[1] h-60 bg-gradient-to-b from-[#FDF5F0] via-[#FDF5F0]/60 to-transparent sm:h-64" />
        <div className="absolute inset-y-0 left-0 z-[1] w-[72%] bg-gradient-to-r from-[#FDF5F0] via-[#FDF5F0]/45 to-transparent sm:w-[62%]" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-[#FDF5F0] via-[#FDF5F0]/20 to-transparent" />
      </div>

      {/* Mobile composition */}
      <div className="relative z-10 flex min-h-[calc(100svh-5.75rem)] flex-col lg:hidden">
        <div className="px-5 pt-11 sm:px-10 sm:pt-12">
          <p className="mb-4 font-body text-xs font-semibold uppercase text-brand-lavender sm:text-sm">
            {content.eyebrow}
          </p>
          <h1 className="max-w-[34rem] text-[2.375rem] font-semibold leading-[0.98] text-brand-taupe sm:text-[2.625rem]">
            <span className="block">{content.title.mobile.firstLine}</span>
            <span className="block">
              {content.title.mobile.secondLine}{" "}
              <span className="font-heading italic text-brand-lavender">
                {content.title.mobile.accent}
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-[32rem] text-[0.98rem] leading-7 text-brand-taupe/85 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <div
          className="mt-7 min-h-[340px] flex-1 sm:mt-8 sm:min-h-[380px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mt-5 flex flex-col gap-2.5 px-5 pb-3 sm:flex-row sm:gap-3 sm:px-10 sm:pb-5">
          <ButtonLink
            href={content.primaryCta.href}
            className="!min-h-11 !py-2.5 w-full px-6 sm:w-auto"
            icon={<WhatsAppIcon className="size-4 text-white" />}
          >
            {content.primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href={content.secondaryCta.href}
            variant="secondary"
            className="!min-h-11 !py-2.5 w-full px-6 sm:w-auto"
            icon={<InstagramIcon className="size-4" />}
          >
            {content.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative z-10 hidden lg:flex lg:min-h-[calc(100vh-104px)] lg:items-center">
        {/* Text container */}
        <div className="relative z-10 max-w-4xl flex-shrink-0 py-10 pl-32 pr-8">
          <p className="mb-5 font-body text-sm font-semibold uppercase text-brand-lavender">
            {content.eyebrow}
          </p>
          <h1 className="max-w-[48rem] text-[5.25rem] font-semibold leading-[0.92] text-brand-taupe xl:text-[5.75rem]">
            <span className="block">{content.title.desktop.firstLine}</span>
            <span className="block">{content.title.desktop.secondLine}</span>
            <span className="block font-heading italic text-brand-lavender">
              {content.title.desktop.accent}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-taupe/85">
            {content.description}
          </p>
          <div className="mt-8 flex flex-row gap-3">
            <ButtonLink
              href={content.primaryCta.href}
              className="px-8"
              icon={<WhatsAppIcon className="size-4 text-white" />}
            >
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={content.secondaryCta.href}
              variant="secondary"
              icon={<InstagramIcon className="size-4" />}
            >
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
            className="h-full w-full object-cover object-[100%_center]"
          />
        </div>
        <div className="absolute inset-y-0 left-0 z-[1] w-[48%] bg-gradient-to-r from-[#FDF5F0] via-[#FDF5F0]/75 to-transparent" />
        <div className="absolute inset-x-0 top-0 z-[1] " />
      </div>
    </section>
  );
}
