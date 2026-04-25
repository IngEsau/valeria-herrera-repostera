import type { BrandConfig, Cta, NavigationItem } from "../../types/content";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

type HeaderProps = {
  brand: BrandConfig;
  navigation: NavigationItem[];
  primaryCta: Cta;
};

function BrandLogo({ brand }: { brand: BrandConfig }) {
  return (
    <a
      href="#inicio"
      className="flex w-fit items-center"
      aria-label={brand.name}
    >
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={brand.logoAlt ?? brand.name}
          className="h-auto w-56 max-w-[68vw] sm:w-64 lg:w-72"
        />
      ) : (
        <span className="font-heading text-2xl font-semibold uppercase text-brand-lavender">
          {brand.name}
        </span>
      )}
    </a>
  );
}

function NavigationLinks({ navigation }: { navigation: NavigationItem[] }) {
  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full px-4 py-2 font-body text-sm font-semibold text-brand-taupe transition hover:bg-white hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender"
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

export function Header({ brand, navigation, primaryCta }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-lavender/10 bg-brand-cream/95 backdrop-blur">
      <Container className="py-5">
        <div className="flex items-center justify-between gap-5 lg:hidden">
          <BrandLogo brand={brand} />
          <details className="group relative">
            <summary
              aria-label="Abrir navegación"
              className="flex size-11 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-full text-brand-lavender transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender [&::-webkit-details-marker]:hidden"
            >
              <span className="h-0.5 w-7 rounded-full bg-current" />
              <span className="h-0.5 w-7 rounded-full bg-current" />
              <span className="h-0.5 w-7 rounded-full bg-current" />
            </summary>
            <div className="absolute right-0 top-14 grid w-[min(18rem,calc(100vw-2.5rem))] gap-2 rounded-lg border border-brand-lavender/15 bg-brand-cream p-4 shadow-soft">
              <nav aria-label="Navegación móvil" className="grid gap-1">
                <NavigationLinks navigation={navigation} />
              </nav>
              <ButtonLink href={primaryCta.href} className="mt-2 w-full px-5">
                {primaryCta.label}
              </ButtonLink>
            </div>
          </details>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
          <BrandLogo brand={brand} />
          <nav
            aria-label="Navegación principal"
            className="flex justify-center gap-2"
          >
            <NavigationLinks navigation={navigation} />
          </nav>

          <ButtonLink
            href={primaryCta.href}
            className="justify-self-end px-6 text-sm"
          >
            {primaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
