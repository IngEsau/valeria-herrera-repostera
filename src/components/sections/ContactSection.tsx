import { Mail } from "lucide-react";
import type { ContactContent } from "../../types/content";
import { InstagramIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id={content.sectionId} className="bg-brand-lavender py-20 sm:py-24 lg:py-28">
      <Container className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/90 sm:mt-8 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row">
            <ButtonLink
              href={content.primaryCta.href}
              icon={<Mail className="size-4 text-white" />}
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
      </Container>
    </section>
  );
}
