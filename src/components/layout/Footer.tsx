import type { FooterContent } from "../../types/content";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type FooterProps = {
  content: FooterContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-brand-lavender/15 bg-white">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-xl font-semibold text-brand-taupe">
            {content.brandLine}
          </p>
          <p className="mt-2 font-body text-sm text-brand-taupe/75">
            {content.copyright}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={content.whatsappUrl} variant="quiet">
            WhatsApp
          </ButtonLink>
          <ButtonLink href={content.instagramUrl} variant="quiet">
            Instagram
          </ButtonLink>
        </div>
      </Container>
    </footer>
  );
}
