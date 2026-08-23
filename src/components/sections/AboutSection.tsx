import { ArrowUpRight } from "lucide-react";
import type { AboutContent } from "../../types/content";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id={content.sectionId}
      className="scroll-mt-24 border-y border-brand-lavender/15 bg-white py-14 sm:py-20 lg:scroll-mt-28"
    >
      <Container className="grid items-center gap-9 lg:grid-cols-[0.95fr_1fr] lg:gap-16">
        <div className="grid h-[26rem] grid-cols-2 grid-rows-[1.2fr_0.8fr] gap-3 sm:h-[30rem] lg:h-[32rem] lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-2">
          {content.gallery.slice(0, 3).map((item, index) => (
            <figure
              key={item.image}
              className={`overflow-hidden rounded-lg ${
                index === 0
                  ? "col-span-2 lg:col-span-1 lg:row-span-2"
                  : "col-span-1"
              }`}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-4 sm:gap-5">
            <span className="h-px flex-1 bg-brand-taupe/35" />
            <h2 className="shrink-0 text-center text-3xl font-semibold leading-tight text-brand-taupe sm:text-4xl">
              {content.eyebrow}
            </h2>
            <span className="h-px flex-1 bg-brand-taupe/35" />
          </div>
          <p className="font-heading text-xl font-semibold leading-snug text-brand-lavender sm:text-2xl">
            {content.title}
          </p>
          <p className="mt-5 text-base leading-7 text-brand-taupe/85 sm:text-lg sm:leading-8">
            {content.description}
          </p>
          <p className="mt-4 text-base leading-7 text-brand-taupe/85 sm:leading-8">
            {content.secondaryText}
          </p>
          <div className="mt-7">
            <ButtonLink
              href={content.cta.href}
              variant="accent"
              className="w-full sm:w-auto sm:min-w-48"
              icon={<ArrowUpRight className="size-4" strokeWidth={2} />}
              iconPosition="right"
            >
              {content.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
