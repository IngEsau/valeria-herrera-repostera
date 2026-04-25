import type { AboutContent } from "../../types/content";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id={content.sectionId} className="bg-brand-cream py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
        <div className="overflow-hidden rounded-lg bg-white shadow-soft">
          <img
            src={content.image}
            alt={content.imageAlt}
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[1.45/1]"
            loading="lazy"
          />
        </div>

        <div>
          <div className="mb-8 flex items-center gap-5">
            <span className="h-px flex-1 bg-brand-taupe/35" />
            <h2 className="shrink-0 text-center text-3xl font-semibold leading-tight text-brand-taupe sm:text-4xl">
              {content.eyebrow}
            </h2>
            <span className="h-px flex-1 bg-brand-taupe/35" />
          </div>
          <p className="font-body text-2xl font-medium-italic leading-tight text-brand-lavender">
            {content.title}
          </p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-brand-taupe/85 sm:text-lg">
            {content.description}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-taupe/85">
            {content.secondaryText}
          </p>
          <div className="mt-8">
            <ButtonLink href={content.cta.href} variant="quiet">
              {content.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
