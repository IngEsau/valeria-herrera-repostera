import type {
  BrandConfig,
  FooterContent,
  NavigationItem,
} from "../../types/content";
import { InstagramIcon, WhatsAppIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type FooterProps = {
  brand: BrandConfig;
  navigation: NavigationItem[];
  content: FooterContent;
};

export function Footer({ brand, navigation, content }: FooterProps) {
  return (
    <footer className="border-t border-brand-lavender/15 bg-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.8fr_0.8fr] md:items-start">
        <div className="max-w-sm">
          {brand.logoStacked ? (
            <img
              src={brand.logoStacked}
              alt={brand.logoAlt ?? brand.name}
              className="h-auto w-40"
            />
          ) : (
            <p className="font-heading text-xl font-semibold text-brand-taupe">
              {content.brandLine}
            </p>
          )}
          <p className="mt-5 font-body text-sm leading-7 text-brand-taupe/75">
            {content.brandLine}
          </p>
          <p className="mt-3 font-body text-sm leading-7 text-brand-taupe/70">
            {content.copyright}
          </p>
        </div>

        <div>
          <h2 className="font-body text-sm font-semibold uppercase text-brand-lavender">
            Acceso rápido
          </h2>
          <nav aria-label="Acceso rápido" className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit rounded-full py-1 font-body text-sm font-semibold text-brand-taupe transition hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-body text-sm font-semibold uppercase text-brand-lavender">
            Contacto
          </h2>
          <div className="mt-4 flex flex-col items-start gap-2">
            <ButtonLink
              href={content.whatsappUrl}
              variant="quiet"
              className="px-0"
              icon={<WhatsAppIcon className="size-4" />}
            >
              WhatsApp
            </ButtonLink>
            <ButtonLink
              href={content.instagramUrl}
              variant="quiet"
              className="px-0"
              icon={<InstagramIcon className="size-4" />}
            >
              Instagram
            </ButtonLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
