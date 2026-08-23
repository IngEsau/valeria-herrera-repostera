import { Mail } from "lucide-react";
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
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-16 md:grid-cols-[1.1fr_0.8fr_0.8fr] md:items-start md:gap-12 lg:gap-24">
          <div className="max-w-sm">
            {brand.logoStacked ? (
              <img
                src={brand.logoStacked}
                alt={brand.logoAlt ?? brand.name}
                className="h-auto w-52 sm:w-56 lg:w-64"
              />
            ) : (
              <p className="font-heading text-2xl font-semibold text-brand-taupe">
                {content.brandLine}
              </p>
            )}
          </div>

          <div>
            <h2 className="font-body text-sm font-semibold uppercase text-brand-lavender">
              Acceso rápido
            </h2>
            <nav aria-label="Acceso rápido" className="mt-6 grid gap-3">
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
            <div className="mt-6 flex flex-col items-start gap-3">
              <ButtonLink
                href={content.whatsappUrl}
                variant="quiet"
                className="!px-0"
                icon={<WhatsAppIcon className="size-4" />}
              >
                WhatsApp
              </ButtonLink>
              <ButtonLink
                href={content.emailUrl}
                variant="quiet"
                className="max-w-full !px-0"
                icon={<Mail className="size-4" strokeWidth={2} />}
              >
                {content.emailUrl?.replace("mailto:", "")}
              </ButtonLink>
              <ButtonLink
                href={content.instagramUrl}
                variant="quiet"
                className="!px-0"
                icon={<InstagramIcon className="size-4" />}
              >
                Instagram
              </ButtonLink>
            </div>
          </div>
        </div>

        <p className="mt-20 text-center font-body text-xs leading-6 text-brand-taupe/70 md:mt-24">
          {content.copyright}
        </p>
      </Container>
    </footer>
  );
}
