import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BrandConfig, Cta, NavigationItem } from "../../types/content";
import { WhatsAppIcon } from "../ui/BrandIcons";
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

function NavigationLinks({
  navigation,
  onNavigate,
}: {
  navigation: NavigationItem[];
  onNavigate?: () => void;
}) {
  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="rounded-full px-4 py-2 font-body text-sm font-semibold text-brand-taupe transition hover:bg-white hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender"
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

export function Header({ brand, navigation, primaryCta }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-brand-lavender/10 bg-brand-cream/95 backdrop-blur">
      <Container className="py-5">
        <div className="flex items-center justify-between gap-5 lg:hidden">
          <BrandLogo brand={brand} />
          <button
            type="button"
            aria-label="Abrir navegación"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(true)}
            className="flex size-11 items-center justify-center rounded-full bg-white text-brand-lavender shadow-soft transition hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender"
          >
            <Menu className="size-7" strokeWidth={2} />
          </button>
        </div>

        {isSidebarOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            <button
              type="button"
              aria-label="Cerrar navegación"
              className="absolute inset-0 bg-brand-taupe/20"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside className="absolute right-0 top-0 flex h-dvh w-[min(22rem,88vw)] flex-col border-l border-brand-lavender/15 bg-brand-cream px-6 py-6 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <BrandLogo brand={brand} />
                <button
                  type="button"
                  aria-label="Cerrar navegación"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex size-10 items-center justify-center rounded-full bg-white text-brand-lavender transition hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender"
                >
                  <X className="size-5" strokeWidth={2} />
                </button>
              </div>

              <nav aria-label="Navegación móvil" className="mt-10 grid gap-3">
                <NavigationLinks
                  navigation={navigation}
                  onNavigate={() => setIsSidebarOpen(false)}
                />
              </nav>

              <div className="mt-auto">
                <ButtonLink
                  href={primaryCta.href}
                  className="w-full px-5"
                  icon={<WhatsAppIcon className="size-4 text-white" />}
                >
                  {primaryCta.label}
                </ButtonLink>
              </div>
            </aside>
          </div>
        ) : null}

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
            icon={<WhatsAppIcon className="size-4 text-white" />}
          >
            {primaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
