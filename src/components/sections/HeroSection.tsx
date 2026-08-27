import type { HeroContent } from "../../types/content";
import { InstagramIcon, WhatsAppIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#FDF5F0]">
      {/* Mobile image layer */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-0 h-[682px] overflow-hidden sm:h-[712px] lg:hidden">
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          width={1672}
          height={941}
          decoding="async"
          className="absolute inset-0 z-0 h-full w-full object-cover object-[76%_42%] sm:object-[72%_42%]"
        />
        <div className="absolute inset-x-0 top-0 z-[1] h-72 bg-gradient-to-b from-[#FDF5F0] via-[#FDF5F0]/70 to-transparent sm:h-80" />
        <div className="absolute inset-y-0 left-0 z-[1] w-[78%] bg-gradient-to-r from-[#FDF5F0] via-[#FDF5F0]/55 to-transparent sm:w-[68%]" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-[#FDF5F0] via-[#FDF5F0]/20 to-transparent" />
      </div>

      {/* Responsive content */}
      <div className="relative z-10 flex min-h-[calc(100svh-5.75rem)] flex-col lg:min-h-[calc(100vh-104px)] lg:justify-center">
        <Container className="relative z-10 flex flex-1 flex-col pb-10 pt-11 sm:!px-10 sm:pt-12 lg:block lg:flex-none lg:!px-8 lg:py-10 2xl:max-w-none 2xl:!px-32">
          <div className="lg:max-w-4xl">
            <p className="mb-4 font-body text-xs font-semibold uppercase text-brand-lavender sm:text-sm lg:mb-5">
              {content.eyebrow}
            </p>
            <h1 className="max-w-[34rem] text-[2.375rem] font-semibold leading-[0.98] text-brand-taupe sm:text-[2.625rem] lg:max-w-[48rem] lg:text-[5.25rem] lg:leading-[0.92] xl:text-[5.75rem]">
              <span className="block lg:hidden">
                <span className="block">{content.title.mobile.firstLine}</span>
                <span className="block">
                  {content.title.mobile.secondLine}{" "}
                  <span className="font-heading italic text-brand-lavender">
                    {content.title.mobile.accent}
                  </span>
                </span>
              </span>
              <span className="hidden lg:block">
                <span className="block">{content.title.desktop.firstLine}</span>
                <span className="block">{content.title.desktop.secondLine}</span>
                <span className="block font-heading italic text-brand-lavender">
                  {content.title.desktop.accent}
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-[32rem] text-[0.98rem] leading-7 text-brand-taupe/85 sm:text-lg sm:leading-8 lg:max-w-2xl">
              {content.description}
            </p>
          </div>

          <div
            className="mt-7 min-h-[300px] flex-1 sm:mt-8 sm:min-h-[340px] lg:hidden"
            aria-hidden="true"
          />

          <div className="relative z-10 mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3 lg:mt-8">
            <ButtonLink
              href={content.primaryCta.href}
              className="!min-h-11 !py-2.5 w-full px-6 sm:w-auto lg:!min-h-12 lg:!py-3 lg:px-8"
              icon={<WhatsAppIcon className="size-4 text-white" />}
            >
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={content.secondaryCta.href}
              variant="secondary"
              className="!min-h-11 !py-2.5 w-full px-6 sm:w-auto lg:!min-h-12 lg:!py-3"
              icon={<InstagramIcon className="size-4" />}
            >
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
        </Container>
      </div>

      {/* Desktop image layer */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={content.heroImage}
            alt={content.heroImageAlt}
            width={1672}
            height={941}
            decoding="async"
            className="h-full w-full translate-x-[12%] object-cover object-[100%_center] xl:translate-x-[8%] 2xl:translate-x-[4%]"
          />
        </div>
        <div className="absolute inset-y-0 left-0 z-[1] w-[84%] bg-gradient-to-r from-[#FDF5F0] via-[#FDF5F0]/95 to-transparent xl:w-[76%] 2xl:w-[70%]" />
      </div>
    </section>
  );
}
