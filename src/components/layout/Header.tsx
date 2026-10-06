import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import type { BrandConfig, Cta, FeaturedProduct, NavigationItem } from "../../types/content";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";
import { MobileNavigation } from "./MobileNavigation";

type HeaderProps = {
  brand: BrandConfig;
  navigation: NavigationItem[];
  primaryCta: Cta;
  featuredProducts: FeaturedProduct[];
  featuredSectionId: string;
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
          width={720}
          height={160}
          decoding="async"
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

export function Header({ brand, navigation, primaryCta, featuredProducts, featuredSectionId }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-brand-cream lg:border-b lg:border-brand-lavender/10 lg:bg-brand-cream/95 lg:backdrop-blur">
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
              className="absolute inset-0 bg-brand-taupe/25 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside className="absolute right-0 top-0 flex h-dvh w-[min(22rem,88vw)] flex-col border-l border-brand-lavender/15 bg-brand-cream px-6 py-6 shadow-soft">
              <div className="flex shrink-0 justify-end">
                <button
                  type="button"
                  aria-label="Cerrar navegación"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-lavender transition hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender"
                >
                  <X className="size-5" strokeWidth={2} />
                </button>
              </div>

              <div className="mt-6 min-h-0 flex-1 overflow-y-auto">
                <MobileNavigation
                  navigation={navigation}
                  featuredProducts={featuredProducts}
                  featuredSectionId={featuredSectionId}
                  onNavigate={() => setIsSidebarOpen(false)}
                />
              </div>

              <div className="mt-6 shrink-0 border-t border-brand-taupe/15 pt-6">
                <ButtonLink
                  href={primaryCta.href}
                  className="w-full px-5"
                  icon={<Mail className="size-4 text-white" />}
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
            icon={<Mail className="size-4 text-white" />}
          >
            {primaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
