import type {
  BrandConfig,
  FooterContent,
  NavigationItem,
} from "../../types/content";
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
        <div className="grid gap-16 md:grid-cols-2 md:items-start md:gap-12 lg:grid-cols-[1fr_0.7fr_1.2fr_1fr] lg:gap-8 xl:gap-12">
          <a
            href="#inicio"
            aria-label={`${brand.name}: ir al inicio`}
            className="block w-fit max-w-full rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lavender"
          >
            {brand.logoStacked ? (
              <img
                src={brand.logoStacked}
                alt={brand.logoAlt ?? brand.name}
                width={420}
                height={280}
                loading="lazy"
                decoding="async"
                className="h-auto w-52 sm:w-56 lg:w-64"
              />
            ) : (
              <p className="font-heading text-2xl font-semibold text-brand-taupe">
                {content.brandLine}
              </p>
            )}
          </a>

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
                href={content.emailUrl}
                variant="quiet"
                className="max-w-full !px-0 break-all text-left"
              >
                {content.emailUrl?.replace("mailto:", "")}
              </ButtonLink>
              <ButtonLink
                href={content.instagramUrl}
                variant="quiet"
                className="!px-0"
              >
                Instagram
              </ButtonLink>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-body text-sm font-semibold uppercase text-brand-lavender">
                {content.serviceAreaLabel}
              </h2>
              <p className="mt-6 font-body text-sm leading-7 text-brand-taupe/85">
                {content.serviceArea}
              </p>
            </div>
            <div>
              <h2 className="font-body text-sm font-semibold uppercase text-brand-lavender">
                {content.hoursLabel}
              </h2>
              <p className="mt-6 font-body text-sm leading-7 text-brand-taupe/85">
                {content.hours}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-16 text-center font-body text-xs leading-6 text-brand-taupe/70 md:mt-20">
          {content.copyright}
        </p>
        <p className="mt-3 text-center font-body text-xs leading-6 text-brand-taupe/70">
          <a
            href={content.developerCredit.href}
            className="rounded-sm underline underline-offset-4 transition hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lavender"
          >
            {content.developerCredit.label}
          </a>
        </p>
      </Container>
    </footer>
  );
}
