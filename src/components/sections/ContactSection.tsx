import { Mail } from "lucide-react";
import type { ContactContent } from "../../types/content";
import { InstagramIcon, WhatsAppIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id={content.sectionId} className="bg-brand-lavender py-16 sm:py-20">
      <Container className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={content.primaryCta.href}
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
          {content.emailCta.href ? (
            <a
              href={content.emailCta.href}
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-3 font-body text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Mail className="size-4" strokeWidth={2} aria-hidden="true" />
              <span>{content.emailCta.label}</span>
            </a>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
